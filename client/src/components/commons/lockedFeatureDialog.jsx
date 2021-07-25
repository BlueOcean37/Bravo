import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import styles from './lockedFeatureDialog.module.scss';

export default function LockedFeatureDialog({
  showLockedFeatureDialog,
  setShowLockedFeatureDialog,
}) {
  {
    /** To use this component, you must create this state and setState
     * function in the parent component and pass them down as props.
     * ShowLockedFeatureDialog should be created with the default state
     * of FALSE. To trigger the pop up, set it to TRUE. */
  }
  return (
    <Dialog
      open={showLockedFeatureDialog}
      aria-labelledby="locked-feature-dialog-title"
      aria-describedby="locked-feature-dialog-description"
      onClose={() => setShowLockedFeatureDialog(false)}
    >
      <DialogTitle id="locked-feature-dialog-title">
        Please log in to access this feature
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="locked-feature-dialog-description">
          The feature you are trying to access is only available to members. If you are not already
          a member, please sign up now and join our community!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowLockedFeatureDialog(false)}>
          <Link to="/signup" className={styles.link}>
            Sign up!
          </Link>
        </Button>
        <Button onClick={() => setShowLockedFeatureDialog(false)}>
          <Link to="/login" className={styles.link}>
            Member login
          </Link>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
