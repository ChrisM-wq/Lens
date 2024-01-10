import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Box, Input, Button, Avatar } from '@mui/material';

const UPDATE_PROFILE = gql`
  mutation Mutation($avatar: String!) {
    updateProfile(avatar: $avatar) {
      username
      email
    }
  }
`;

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);

  const [updateProfile] = useMutation(UPDATE_PROFILE);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setAvatar(reader.result);
        setPreviewAvatar(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      // Call the Apollo mutation to update the user profile with the avatar
      const encodedAvatar = encodeURIComponent(`${avatar}`);
      await updateProfile({
        variables: { avatar: encodedAvatar },
      });

      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <Box>
      <h1>Update Profile</h1>

      {previewAvatar && <Avatar src={previewAvatar} alt="Avatar Preview" sx={{ width: 100, height: 100 }} />}

      <Input type="file" accept="image/*" onChange={handleAvatarChange} />

      <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
        Update Profile
      </Button>
    </Box>
  );
};

export default Profile;