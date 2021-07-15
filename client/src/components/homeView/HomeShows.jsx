import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import styles from './homeshows.module';
import axios from 'axios';

export default function HomeShows({sort}) {
  const [shows, setShows] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  
  useEffect(() => {
    axios.get(`/api/shows?sort=${sort}`)
    .then(({ data }) => setShows(data))
    .catch((err) => console.log(err))
  }, [])

  function displayMoreShows(direction) {
    if (direction === 'back') {
      if (start === 0) {
        setStart(16);
        setEnd(20)
      } else {
        setStart(start - 4);
      }
    } else if (direction === 'forward') {
      if (end === 20) {
        setStart(0);
        setEnd(start + 4);
      } else {
        setStart(start + 4);
        setEnd(end + 4);
      }
    }
  }

  return (
    <div className={styles.showsContainer}>
      <Button onClick={() => displayMoreShows('back')}>
        <ArrowBack/>
      </Button>
        {shows.map((show, index) => (
          <div key={index}>
            {index >= start && index <= start + 3 ? 
              <Link to={{ pathname: '/shows', state: show.id }}>
                <div className={styles.imgContainer}>
                  <img 
                    className={styles.showsPhoto} 
                    src={show.photo}
                  />
                </div>
              </Link>
            : null}
          </div>))} 
      <Button onClick={() => displayMoreShows('forward')}>
        <ArrowForward/>
      </Button>
    </div> 
  ) 
}

