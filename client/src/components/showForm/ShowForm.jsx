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
  const [photo, setPhoto] = useState('');
  const [submitDialogOpen, setSubmitDialogOpen] = useState(false);
  const [newShowID, setNewShowID] = useState(null);
  const [redirectToShowPage, setRedirectToShowPage] = useState(false);
  const [counter, setCounter] = useState(6);

  const formValidation = () => {
    return title && street && city && state && zip && date;
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      const epochDate = Date.parse(date);
      const newShow = {
        user_id: 1,
        title,
        street,
        city,
        state,
        zip,
        date: epochDate,
        website,
        cast,
        description,
      };
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
    } else {
      alert('Please enter a value for all required fields');
    }
  };

  if (redirectToShowPage) {
    return <Redirect to={{ pathname: '/shows', state: { show_id: newShowID } }} />;
  }

  return (
    <div className={styles.container}>
      <h1>ADD YOUR SHOW!</h1>
      <div className={styles.form}>
        <div className={styles.input}>
          <TextField
            autoFocus={true}
            id="title"
            label="Show Title"
            value={title}
            required={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="street"
            label="Street Address"
            value={street}
            required={true}
            onChange={(e) => setStreet(e.target.value)}
          />
          <TextField
            id="city"
            label="City"
            value={city}
            required={true}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="state"
            label="State"
            value={state}
            required={true}
            onChange={(e) => setState(e.target.value)}
          />
          <TextField
            id="zip"
            label="Zipcode"
            value={zip}
            required={true}
            onChange={(e) => setZip(e.target.value)}
          />
          <TextField
            id="date"
            label="Dates"
            value={date}
            required={true}
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
            dropzoneText={'Drag and drop an image here or click'}
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
              <DialogTitle id="submit-dialog-title">{'Your show has been submitted'}</DialogTitle>
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
