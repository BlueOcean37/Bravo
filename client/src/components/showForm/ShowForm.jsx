import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import styles from './showForm.module.scss';
import { useAuth } from '../../contexts/AuthContext';

export default function ShowForm() {
  const [title, setTitle] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [date, setDate] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [photoForm, setPhotoForm] = useState(false);
  const [submitDialogOpen, setSubmitDialogOpen] = useState(false);
  const [newShowID, setNewShowID] = useState('');
  const [redirectToShowPage, setRedirectToShowPage] = useState(false);
  const [counter, setCounter] = useState(6);
  const [user, setUser] = useState('');
  const [showPhotoAlert, setShowPhotoAlert] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (counter < 6) {
      const countDown = setTimeout(() => {
        setCounter(counter - 1);
        if (counter === 0) {
          setRedirectToShowPage(true);
        }
      }, 1000);
      return () => clearTimeout(countDown);
    }
  }, [counter]);

  useEffect(() => {
    axios
      .put('/api/users/', { email: currentUser.email })
      .then((res) => setUser(res.data.id))
      .catch((err) => console.error('error getting userid from db', err));
  }, []);

  const createBodyObject = (photo) => {
    const epochDate = Date.parse(date);
    return {
      user_id: user,
      title,
      street,
      city,
      state,
      zip,
      date: epochDate,
      website,
      description,
      photo,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const photoFormCheck = photoForm.get('show');
    if (photoFormCheck !== 'undefined') {
      setShowPhotoAlert(false);
      axios
        .post('/api/image-upload', photoForm, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          const newShow = createBodyObject(res.data);
          axios
            .post('/api/shows/', newShow)
            .then((result) => {
              setSubmitDialogOpen(true);
              setNewShowID(result.data.id);
              setCounter(5);
            })
            .catch((err) => {
              console.error('There was an error', err);
              alert('There was a problem submitting your show, please try again');
            });
        })
        .catch((err) => console.error('error uploading the image', err));
    } else {
      setShowPhotoAlert(true);
    }
  };

  if (redirectToShowPage) {
    return <Redirect to={{ pathname: '/shows', state: newShowID }} />;
  }

  const colorTheme = createTheme({
    palette: {
      type: window.theme ? 'light' : 'dark',
    },
  });

  return (
    <div className={styles.container}>
      <h1>ADD YOUR SHOW!</h1>
      <ThemeProvider theme={colorTheme}>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <div className={styles.input}>
            <TextField
              autoFocus
              id="title"
              label="Show Title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
              id="street"
              label="Street Address"
              value={street}
              required
              onChange={(e) => setStreet(e.target.value)}
            />
            <TextField
              id="city"
              label="City"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id="state"
              label="State"
              value={state}
              required
              onChange={(e) => setState(e.target.value)}
            />
            <TextField
              id="zip"
              label="Zipcode"
              value={zip}
              required
              onChange={(e) => setZip(e.target.value)}
            />
            <TextField
              id="date"
              label="Dates"
              InputLabelProps={{ shrink: true }}
              value={date}
              required
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
            <TextField id="website" label="Website" onChange={(e) => setWebsite(e.target.value)} />
            <TextField
              id="description"
              label="Description"
              value={description}
              multiline
              rows={6}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.photoContainer}>
            <DropzoneArea
              id="file-dropzone"
              filesLimit={1}
              acceptedFiles={['image/*']}
              onChange={(files) => {
                const form = new FormData();
                form.set('show', files[0]);
                setPhotoForm(form);
              }}
              dropzoneText="Drag and drop an image here or click (Required)"
            />
            <div>
              <div className={styles.container}>
                {showPhotoAlert && (
                  <Alert variant="outlined" severity="error">
                    You must enter an image for your show
                  </Alert>
                )}
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </div>
        </form>
      </ThemeProvider>

      <Dialog
        open={submitDialogOpen}
        aria-labelledby="submit-dialog-title"
        aria-describedby="submit-dialog-description"
      >
        <DialogTitle id="submit-dialog-title">Your show has been submitted</DialogTitle>
        <DialogContent>
          <DialogContentText id="submit-dialog-description">
            Your show has successfully been submitted. You will be redirected to your new show's
            page in {counter} seconds.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSubmitDialogOpen(false)}>
            <Link to={{ pathname: '/shows', state: newShowID }}>Continue to show page</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
