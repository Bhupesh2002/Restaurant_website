import React, { useState } from 'react';
import { Grid, Paper, TextField, Typography, Button, Box, Alert } from '@mui/material';

let Contact = () => {
  // let navigate = useNavigate();
  let [formData, setFormData] = useState({name: '',email: '',message: ''});

  let [status, setStatus] = useState('');

  let handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };  

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('All fields are required.');
      setTimeout(() => setStatus(''), 3000);
    }

    try {
      let response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
        
      } else {
        setStatus('Failed to send. Please try again.');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus(error);
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className='contact-wrapper'>
      <Grid container justifyContent="center" >
        <Paper elevation={3} sx={{ padding: 5, width:"100%" }} style={ { backgroundColor:"whitesmoke",borderRadius:"15px",opacity:"0.9"} }>
          <Typography variant="h4" sx={{ mb:4 }} align="center">Contact Us</Typography>
            {status && (
              <Alert severity={status.includes("successfully") ? "success" : "error"} sx={{ mb: 2 }}>
                {status}
              </Alert>)}
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required/>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required/>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required/>
                <Button type="submit" variant="contained" color="secondary" fullWidth>Send</Button>
              </Box>
            </Paper>
          </Grid>
        </div>
     );
  }

export default Contact;
