import React, { useState } from 'react';
import Navbar from './Navbar';
import JobTable from './JobTable';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ApplicationModal from './ApplicationModal';

export default function Home(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

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
      <ApplicationModal open={modalOpen} onClose={handleCloseModal} />
      <JobTable />
    </div>
  );
}
