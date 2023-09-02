import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import Navbar from './Navbar';

export default function Notifications(): JSX.Element {
  const friendRequests = [
    { id: 1, text: 'Alex sent you a friend request.' },
    { id: 2, text: 'Jess sent you a friend request.' },
    { id: 3, text: 'Charles sent you a friend request.' },
  ];

  return (
    <div className="Notifications">
      <Navbar />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Friend Request</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {friendRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell align="left">{request.text}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="success">
                    Accept
                  </Button>
                  <Button variant="contained" color="error">
                    Decline
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
