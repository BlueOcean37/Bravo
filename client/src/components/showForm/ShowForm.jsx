import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import axios from 'axios';
import styles from './showForm.module';
import { useAuth } from '../../contexts/AuthContext';

export default function ShowForm() {
  const [title, setTitle] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [date, setDate] = useState('');
  const [website, setWebsite] = useState('');
  const [cast, setCast] = useState('');
  const [description, setDescription] = useState('');
  const [photoForm, setPhotoForm] = useState('');
  const [submitDialogOpen, setSubmitDialogOpen] = useState(false);
  const [newShowID, setNewShowID] = useState('');
  const [redirectToShowPage, setRedirectToShowPage] = useState(false);
  const [counter, setCounter] = useState(6);
  const [user, setUser] = useState('');
  const { currentUser } = useAuth();

  const formValidation = () => title && street && city && state && zip && date;

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
      cast,
      description,
      photo,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      axios
        .post('/api/image-upload', photoForm, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          const newShow = createBodyObject(res.data);
          axios
            .post('/api/shows/', newShow)
            .then((res) => {
              setSubmitDialogOpen(true);
              setNewShowID(res.data.id);
              setCounter(5);
            })
            .catch((err) => {
              console.error('There was an error', err);
              alert('There was a problem submitting your show, please try again');
            });
        })
        .catch((err) => console.error('error uploading the image', err));
    } else {
      alert('Please enter a value for all required fields');
    }
  };

  if (redirectToShowPage) {
    return <Redirect to={{ pathname: '/shows', state: newShowID }} />;
  }

  return (
    <div className={styles.container}>
      <h1>ADD YOUR SHOW!</h1>
      <div className={styles.form}>
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
            id="cast"
            label="Cast/Crew"
            value={cast}
            multiline
            rows={5}
            onChange={(e) => setCast(e.target.value)}
          />
          <TextField
            id="description"
            label="Description"
            value={description}
            multiline
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.photoContainer}>
          <DropzoneArea
            filesLimit={1}
            acceptedFiles={['image/*']}
            onChange={(files) => {
              const form = new FormData();
              form.append('show', files[0]);
              setPhotoForm(form);
            }}
            dropzoneText="Drag and drop an image here or click"
          />
          <div>
            <Button className={styles.btn} onClick={handleSubmit}>
              Submit
            </Button>
            <Dialog
              open={submitDialogOpen}
              aria-labelledby="submit-dialog-title"
              aria-describedby="submit-dialog-description"
            >
              <DialogTitle id="submit-dialog-title">Your show has been submitted</DialogTitle>
              <DialogContent>
                <DialogContentText id="submit-dialog-description">
                  Your show has successfully been submitted. You will be redirected to your new
                  show's page in {counter} seconds.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSubmitDialogOpen(false)}>
                  <Link to={{ pathname: '/shows', state: { show_id: newShowID } }}>
                    Continue to show page
                  </Link>
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
