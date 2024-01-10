const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const axios = require('axios');
const nodemailer = require('nodemailer');
require('colors');

module.exports = {
    Mutation : {
        async registerUser(_, { registerInput: { username, email, password } }) {

            // See if an old user exists with email attempting to register
            const oldUser = await User.findOne({ email });

            // Throw an error if that user exists
            if (oldUser) {
                throw new Error(error, 'A user is already registered with the email' + email, 'USER_ALREADY_EXISTS')
            }

            // Encrypt password
            const encryptedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));

            // Build out mongoose model
            const newUser = new User({
                username: username,
                email: email.toLowerCase(),
                password: encryptedPassword
            });

            // Create and return a JWT (attach to our User model)
            const token = jwt.sign(
                {
                    user_id: newUser._id,
                    email: newUser.email,
                },
                process.env.JWT_SECRET,
                { expiresIn: '2h' }
            );
            newUser.token = token;

            // Save our user in MongoDB
            const res = await newUser.save();

            return {
                id: res._id,
                ...res._doc
            };
        },
        async loginUser(_, { loginInput: { email, password } }) {

            try {
                // See if user exists
                const user = await User.findOne({ email });
        
                if (!user) {
                    throw new Error('Invalid email or password');
                }
        
                // Check password
                const isPasswordValid = await bcrypt.compare(password, user.password);
        
                if (!isPasswordValid) {
                    throw new Error('Invalid email or password');
                }
                
                // Create and return a JWT
                const token = jwt.sign(
                    {
                        user_id: user._id,
                        email: user.email,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: '2h' }
                );
        
                user.token = token;
                console.log(token);
                console.log(`Login request: ${user.email}`.yellow);
                // Save our user in MongoDB
                const res = await user.save();
                
                return {
                    id: res._id,
                    ...res._doc,
                };

            } catch (error) {
                // Handle errors here
                console.error('Login failed:', error.message);
                throw new Error('Authentication failed');
            }

        },
        updateProfile: async (_, { avatar } ) => {
          try {
            console.log("updating profile")
            // Assuming you have a User model with findByIdAndUpdate method

            avatar = decodeURIComponent(avatar);
            const updatedUser = await User.findByIdAndUpdate(
              '659d392b87daf3d7a90660ba',
              { $set: { avatar } },
              { new: true } // Return the updated document
            );
    
            return updatedUser;
          } catch (error) {
            console.error('Error updating profile:', error);
            throw new Error('Unable to update profile');
          }
        },
        forgotPassword: async (_, { forgotPasswordInput: { email } } ) => {

            const user = await User.findOne({ email: email });
            console.log(user)
            const token = jwt.sign(
                {
                    email: user.email,
                },
                process.env.JWT_SECRET,
                { expiresIn: '15m' }
            );

            user.token = token;
            await user.save();

            const transporter = nodemailer.createTransport({
                host: "smtp-relay.brevo.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.BREVO_EMAIL,
                    pass: process.env.BREVO_PASSWORD,
                },
            });


            const mailOptions = {
                from: 'chrismchardy1@gmail.com',
                to: email,
                subject: 'Test send to me',
                html: `<p>Your HTML content goes here. You can include formatted text, images, links, etc.</p><p>Token: ${token}</p>
                <a href="http://localhost:5173/resetPassword?token=${token}">Click Here</a>`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });






        },
        resetPassword: async (_, { resetPasswordInput: { password, confirmPassword } }, context) => {


            
            // Get the token from the context (auth headers)
            const token = context.token.split(' ')[1];
          
            // Validate that a token exists
            if (!token) {
                throw new Error('Access token not found in the cookie.');
            }

            // Decode the token and get the user email
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const email = decodedToken.email;

            console.log(email);
           // Validate that password and confirm password are the same
            if (password !== confirmPassword) {
                return new Error('Passwords are not the same');
            }

            // Encrypt password
            const encryptedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));

            // Update user password
            const user = await User.findOneAndUpdate({ email }, { password: encryptedPassword });

            // Create and return a JWT (attach to our User model)
            const newtoken = jwt.sign(
                {
                    user_id: user._id,
                    email: user.email,
                },
                process.env.JWT_SECRET,
                { expiresIn: '2h' }
            );
            user.token = newtoken;

            // Save our user in MongoDB
            const res = await user.save();

            return {
                id: res._id,
                ...res._doc
            };

        },
    },
    Query: {
        getAllUsers: async () => await User.find(),
        getUser: async (_, id) => {
            console.log(id.id);
            const user = User.findById(id.id);
            //console.log(user);

            return user;
        },
    },
}