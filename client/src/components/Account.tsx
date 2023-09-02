import React from 'react';
import { Box, Typography, Button, Paper, List, ListItem } from '@mui/material';

import Navbar from './Navbar';

export default function Account(): JSX.Element {
  const generateRandomName = () => {
    const firstNames = [
      'John',
      'Jane',
      'Alice',
      'Bob',
      'Charlie',
      'David',
      'Emily',
      'Grace',
      'Henry',
      'Isabella',
    ];
    const lastNames = [
      'Smith',
      'Johnson',
      'Williams',
      'Brown',
      'Jones',
      'Davis',
      'Miller',
      'Wilson',
      'Moore',
      'Taylor',
    ];

    const randomFirstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName =
      lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirstName} ${randomLastName}`;
  };

  const randomFriendsList = Array.from({ length: 30 }, () =>
    generateRandomName()
  );
  return (
    <div className="Account">
      <Navbar />
      <Box>
        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
          {/* Profile picture */}
          {/* <img
            src="/path_to_profile_image.jpg"
            alt="Profile"
            width="100"
            height="100"
          /> */}

          {/* User's name */}
          <Typography variant="h5">John Smith</Typography>
        </Paper>
      </Box>

      <Box sx={{ ml: 2 }}>
        {/* Friends List */}
        <Typography variant="h6">Friends List</Typography>
        <Paper elevation={3} sx={{ maxHeight: '300px', overflowY: 'auto' }}>
          <List>
            {randomFriendsList.map((friend, index) => (
              <ListItem key={index}>
                <Typography sx={{ flexGrow: 1 }}>{friend}</Typography>
                <Button variant="contained" color="primary">
                  Visit Profile
                </Button>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </div>
  );
}
