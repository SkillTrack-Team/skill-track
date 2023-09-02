import React, { useState } from 'react';
import Navbar from './Navbar';
import JobTable from './JobTable';
import { Button } from '@mui/material';
import ApplicationModal from './ApplicationModal';

export default function Home(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

  const data = {
  company: '',
  position: '',
  interest_level: 1,
  date_submitted: '',
  location: '',
  description: '',
  application_type: '',
  job_posting_url: '',
  internal_contact: '',
  internal_contact_email: '',
  follow_up: false,
  notes: '',
  status: ''}

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Home">
      <Navbar />
      <Button color="primary" onClick={handleOpenModal}>
        Add Job Application
      </Button>
      <ApplicationModal open={modalOpen} onClose={handleCloseModal} data={data}/>
      <JobTable />
    </div>
  );
}
