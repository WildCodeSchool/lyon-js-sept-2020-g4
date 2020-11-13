import React, { useState } from 'react';
import './Form.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    /* Cadre TextField */
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'purple',
    },
    '& .MuiOutlinedInput-input': {
      color: 'green',
    },
    '&:hover .MuiOutlinedInput-input': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: 'pink',
    },
    /* label de l'input */
    '& .MuiInputLabel-outlined': {
      color: 'white',
    },
    '&:hover .MuiInputLabel-outlined': {
      color: 'red',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: 'purple',
    },
  },
}));

const Form = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [lastNameIsError, setLastNameIsError] = useState(false);
  const [firstNameIsError, setFirstNameIsError] = useState(false);
  const [emailIsError, setEmailIsError] = useState(false);
  const [messageIsError, setMessageIsError] = useState(false);
  const [messageErrorEmail, setMessageErrorEmail] = useState('');
  const classes = useStyles();

  const HandleBlurLastName = () => {
    if (lastName.length <= 0) {
      setLastNameIsError(true);
    } else {
      setLastNameIsError(false);
    }
  };

  const HandleBlurFirstName = () => {
    if (firstName.length <= 0) {
      setFirstNameIsError(true);
    } else {
      setFirstNameIsError(false);
    }
  };

  const HandleBlurEmail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.length <= 0) {
      setEmailIsError(true);
      setMessageErrorEmail('email is required');
    } else if (!regex.test(email)) {
      setEmailIsError(true);
      setMessageErrorEmail('invalid email');
    } else {
      setEmailIsError(false);
    }
  };

  const HandleBlurMessage = () => {
    if (message.length <= 0) {
      setMessageIsError(true);
    } else {
      setMessageIsError(false);
    }
  };

  const handleSubmit = (e) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    HandleBlurLastName();
    HandleBlurFirstName();
    HandleBlurEmail();
    HandleBlurMessage();
    e.preventDefault();

    if (
      !(lastName.length <= 0) &&
      !(firstName.length <= 0) &&
      !(email.length <= 0) &&
      regex.test(email) &&
      !(message.length <= 0)
    ) {
      alert('Form send');
      setLastName('');
      setFirstName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="form-contact">
      <h1>Contact Us</h1>
      <div className="contact-lastname">
        <TextField
          className={classes.root}
          id="outlined-basic"
          label="Lastname"
          variant="outlined"
          name="lastname"
          onChange={(e) => setLastName(e.target.value)}
          onBlur={HandleBlurLastName}
          error={!!lastNameIsError}
          helperText={lastNameIsError ? 'lastname is required' : ''}
          value={lastName}
        />
      </div>
      <div className="contact-firstname">
        <TextField
          className={classes.root}
          id="outlined-basic"
          label="Firstname"
          variant="outlined"
          name="firstname"
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={HandleBlurFirstName}
          error={!!firstNameIsError}
          helperText={firstNameIsError ? 'firstname is required' : ''}
          value={firstName}
        />
      </div>
      <div className="contact-email">
        <TextField
          className={classes.root}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={HandleBlurEmail}
          error={!!emailIsError}
          helperText={emailIsError ? messageErrorEmail : ''}
          value={email}
        />
      </div>
      <div className="contact-message">
        <TextField
          className={classes.root}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          onBlur={HandleBlurMessage}
          error={!!messageIsError}
          helperText={messageIsError ? 'message is required' : ''}
          value={message}
        />
      </div>
      <div className="muiButton">
        <Button variant="contained" onClick={handleSubmit}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Form;
