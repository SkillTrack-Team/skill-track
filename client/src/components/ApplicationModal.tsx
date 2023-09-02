import React, { useState } from 'react';
import axios from '../api/axios';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';

interface ApplicationModalProps {
  open?: boolean;
  onClose?: (event: React.MouseEvent) => void;
  data: {
    company: string;
    position: string;
    interest_level: number;
    date_submitted: Date;
    location: string;
    description: string;
    application_type: string;
    job_posting_url: string;
    internal_contact: string;
    internal_contact_email: string;
    follow_up: boolean;
    notes: string;
    status: string;
  },
  applicationId?: number
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  open,
  onClose,
  data,
  applicationId
}) => {
  const [formData, setFormData] = useState(data);

  const saveApplication = async() => {
    try {
      const POSTAPPLICATIONSURL = 'applications/1';
      

      // if(applicationId !== null){
      //   const PUTAPPLICATIONSURL = `applications/${applicationId}`;
      //   await axios.put(PUTAPPLICATIONSURL, formData);
      // }else{
        await axios.post(POSTAPPLICATIONSURL, formData);
      // }

      window.location.reload();

      handleClose();
      
    } catch(err){
      console.log(err)
    }
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    onClose();
    setFormData({
      id: null,
      company: '',
      position: '',
      interest_level: 0,
      date_submitted: '',
      location: '',
      description: '',
      application_type: '',
      job_posting_url: '',
      internal_contact: '',
      internal_contact_email: '',
      follow_up: false,
      notes: '',
      status: '',
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Application</DialogTitle>
      <DialogContent>
        {/* Company */}
        <TextField
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />

        {/* Position */}
        <TextField
          label="Position"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />

        {/* Interest Level */}
        <FormControl fullWidth margin="dense">
          <InputLabel>Interest Level</InputLabel>
          <Select
            name="interest_level"
            value={formData.interest_level}
            onChange={handleInputChange}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
          </Select>
        </FormControl>

        {/* Date Submitted */}
        <TextField
          label="Date Submitted"
          name="date_submitted"
          type="date"
          value={formData.date_submitted}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
          InputLabelProps={{ shrink: true }}
        />

        {/* Location */}
        <TextField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />

        {/* Description */}
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={4}
          margin="dense"
        />

        {/* Application Type */}
        <FormControl fullWidth margin="dense">
          <InputLabel>Application Type</InputLabel>
          <Select
            name="application_type"
            value={formData.application_type}
            onChange={handleInputChange}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="easy apply">Easy Apply</MenuItem>
            <MenuItem value="company website">Company Website</MenuItem>
          </Select>
        </FormControl>

        {/* Job Posting URL */}
        <TextField
          label="Job Posting URL"
          name="job_posting_url"
          value={formData.job_posting_url}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />

        {/* Internal Contact */}
        <TextField
          label="Internal Contact"
          name="internal_contact"
          value={formData.internal_contact}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />

        {/* Internal Contact Email */}
        <TextField
          label="Internal Contact Email"
          name="internal_contact_email"
          value={formData.internal_contact_email}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />

        {/* Follow Up */}
        <FormControl component="fieldset" fullWidth margin="dense">
          <h4>Followed up?</h4>
          <RadioGroup
            name="follow_up"
            value={formData.follow_up}
            onChange={handleInputChange}
          >
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

        {/* Notes */}
        <TextField
          label="Notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={4}
          margin="dense"
        />

        {/* Status */}
        <FormControl fullWidth margin="dense">
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="applied">Applied</MenuItem>
            <MenuItem value="interviewed">Interviewed</MenuItem>
            <MenuItem value="received offer">Received Offer</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
            <MenuItem value="accepted">Accepted</MenuItem>
            <MenuItem value="negotiating">Negotiating</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={saveApplication} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplicationModal;
