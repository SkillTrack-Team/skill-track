import React, {useState, useEffect} from 'react';
import axios from '../api/axios';
import ApplicationModal from './ApplicationModal';

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

export default function JobTable(): JSX.Element {
  const GETAPPLICATIONSURL = 'applications/1';

  const [applications, setApplications] : [any, any] = useState([]);

  useEffect(() => {
    const getApplications = async () =>{
      try {
        const response = await axios.get(GETAPPLICATIONSURL);
        for (let app of response.data){
          app.date_submitted = app.date_submitted.slice(0,10)
        }
        // console.log(response.data);
        setApplications(response.data);

      } catch(err){
        console.log(err)
      }
    }

    getApplications();
  }, [])


  return (
    <div className="JobTable">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: 'orange' }}>
              <TableCell>Company</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Interest</TableCell>
              <TableCell>Submitted</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Application Type</TableCell>
              <TableCell>Url</TableCell>
              <TableCell>Internal Contact</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Follow up</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map((row : any) => (
              <TableRow key={row.id}>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell>{row.interest_level}</TableCell>
                <TableCell>{row.date_submitted}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.application_type}</TableCell>
                <TableCell>{row.job_posting_url}</TableCell>
                <TableCell>{row.internal_contact}</TableCell>
                <TableCell>{row.internal_contact_email}</TableCell>
                <TableCell>{row.follow_up}</TableCell>
                <TableCell>{row.notes}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button color="primary">Edit</Button>
                  <Button color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


// const data = [
//   {
//     id: 1,
//     user_id: 4321,
//     company: 'Apple',
//     position: 'Backend Engineer',
//     interest_level: 5,
//     date_submitted: 'today',
//     location: 'CA',
//     description: "it's a job",
//     application_type: 'easy apply',
//     job_posting_url: 'www.apple.com',
//     internal_contact: 'my friend',
//     internal_contact_email: 'myfriend@apple.com',
//     follow_up: 'true',
//     notes: 'nothing',
//     status: 'applied',
//   },
//   {
//     id: 2,
//     user_id: 4321,
//     company: 'Google',
//     position: 'Backend Engineer',
//     interest_level: 5,
//     date_submitted: 'tomorrow',
//     location: 'NY',
//     description: "it's a job",
//     application_type: 'easy apply',
//     job_posting_url: 'www.google.com',
//     internal_contact: 'my friend',
//     internal_contact_email: 'myfriend@google.com',
//     follow_up: 'true',
//     notes: 'nothing',
//     status: 'applied',
//   },
//   {
//     id: 3,
//     user_id: 4321,
//     company: 'mycompany',
//     position: 'Backend Engineer',
//     interest_level: 5,
//     date_submitted: 'today',
//     location: 'CA',
//     description: "it's a job",
//     application_type: 'easy apply',
//     job_posting_url: 'www.mycompany.com',
//     internal_contact: 'my friend',
//     internal_contact_email: 'myfriend@mycompany.com',
//     follow_up: 'true',
//     notes: 'nothing',
//     status: 'applied',
//   },
//   {
//     id: 4,
//     user_id: 4321,
//     company: 'hiscompany',
//     position: 'Backend Engineer',
//     interest_level: 5,
//     date_submitted: 'yesterday',
//     location: 'DE',
//     description: "it's a job",
//     application_type: 'easy apply',
//     job_posting_url: 'www.hiscompany.com',
//     internal_contact: 'my friend',
//     internal_contact_email: 'myfriend@hiscompany.com',
//     follow_up: 'true',
//     notes: 'nothing',
//     status: 'applied',
//   },
//   {
//     id: 5,
//     user_id: 4321,
//     company: 'facebook',
//     position: 'Backend Engineer',
//     interest_level: 5,
//     date_submitted: 'today',
//     location: 'TX',
//     description: "it's a job",
//     application_type: 'easy apply',
//     job_posting_url: 'www.facebook.com',
//     internal_contact: 'my friend',
//     internal_contact_email: 'myfriend@facebook.com',
//     follow_up: 'true',
//     notes: 'nothing',
//     status: 'applied',
//   },
// ];