import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import axios from 'axios';
import styles from './showForm.module';

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

  const formValidation = () => {
    return title && street && city && state && zip && date;
  };

  const handleImageUpload = (file) => {
    setPhoto(file[0]);
    const photoData = new FormData().append('showImage', photo);
  };

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
        .post('/shows/', newShow)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert('Please enter a value for all required fields');
    }
  };

  return (
    <div className={styles.container}>
      <h1>ADD YOUR SHOW!</h1>
      <div className={styles.form}>
        <div className={styles.input}>
          <TextField
            id="title"
            label="Show Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="street"
            label="Street Address"
            required
            onChange={(e) => setStreet(e.target.value)}
          />
          <TextField id="city" label="City" required onChange={(e) => setCity(e.target.value)} />
          <TextField id="state" label="State" required onChange={(e) => setState(e.target.value)} />
          <TextField id="zip" label="Zipcode" required onChange={(e) => setZip(e.target.value)} />
          <TextField
            id="date"
            label="Dates"
            required
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField id="website" label="Website" onChange={(e) => setWebsite(e.target.value)} />
          <TextField
            id="cast"
            label="Cast/Crew"
            multiline
            rows={5}
            onChange={(e) => setCast(e.target.value)}
          />
          <TextField
            id="description"
            label="Description"
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
            onChange={(file) => {
              if (file.length) {
                console.log(file);
                handleImageUpload(file);
              }
            }}
          />
          <Button className={styles.btn} onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
