import React, { useState } from 'react';
import {Snackbar, Alert, Slide} from '@mui/material';

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

const MessageBanner = ({ message, severity }) => {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    // Prevent closing when clicking away if desired
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{ mt: 2 }}
      TransitionComponent={SlideTransition}
    >
      <Alert
        severity={severity}
        onClose={handleClose}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MessageBanner;
