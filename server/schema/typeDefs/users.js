const typeDefs = `

type User {
    username: String,
    email: String,
    password: String,
    token: String
    avatar: String
}

input RegisterInput {
    username: String
    email: String
    password: String
}

input ForgotPasswordInput {
    email: String
}

input ResetPasswordInput {
    password: String
    confirmPassword: String
}

input LoginInput {
    email: String
    password: String
}

type Query {
    getAllUsers: [User]
    getUser(id: ID): User
}

type Mutation {
  updateProfile(avatar: String!): User
  registerUser(registerInput: RegisterInput): User
  loginUser(loginInput: LoginInput): User
  forgotPassword(forgotPasswordInput: ForgotPasswordInput): User
  resetPassword(resetPasswordInput: ResetPasswordInput): User
}`;

module.exports = typeDefs;