import React from 'react';
import './Form.css';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      email: '',
      message: '',
      lastnameIsError: false,
      firstnameIsError: false,
      emailIsError: false,
      messageIsError: false,
      messageErrorEmail: '',
    };
  }

  handleChange = (e) => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };

  HandleBlurLastName = () => {
    const { lastname } = this.state;
    if (lastname.length <= 0) {
      this.setState({ lastnameIsError: true });
    } else {
      this.setState({ lastnameIsError: false });
    }
  };

  HandleBlurFirstName = () => {
    const { firstname } = this.state;
    if (firstname.length <= 0) {
      this.setState({ firstnameIsError: true });
    } else {
      this.setState({ firstnameIsError: false });
    }
  };

  HandleBlurEmail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const { email } = this.state;
    if (email.length <= 0) {
      this.setState({
        emailIsError: true,
        messageErrorEmail: 'email is required',
      });
    } else if (!regex.test(email)) {
      this.setState({ emailIsError: true, messageErrorEmail: 'invalid Email' });
    } else {
      this.setState({ emailIsError: false });
    }
  };

  HandleBlurMessage = () => {
    const { message } = this.state;
    if (message.length <= 0) {
      this.setState({ messageIsError: true });
    } else {
      this.setState({ messageIsError: false });
    }
  };

  handleSubmit = (e) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.HandleBlurLastName();
    this.HandleBlurFirstName();
    this.HandleBlurEmail();
    this.HandleBlurMessage();
    e.preventDefault();

    const { lastname } = this.state;
    const { firstname } = this.state;
    const { email } = this.state;
    const { message } = this.state;
    if (
      !(lastname.length <= 0) &&
      !(firstname.length <= 0) &&
      !(email.length <= 0) &&
      regex.test(email) &&
      !(message.length <= 0)
    ) {
      alert('Form send');
      this.setState({ lastname: '', firstname: '', email: '', message: '' });
    }
  };

  render() {
    const { lastnameIsError } = this.state;
    const { firstnameIsError } = this.state;
    const { emailIsError } = this.state;
    const { messageIsError } = this.state;
    const { messageErrorEmail } = this.state;
    const { lastname } = this.state;
    const { firstname } = this.state;
    const { email } = this.state;
    const { message } = this.state;
    return (
      <div className="form-contact">
        <h1>Contact Us</h1>
        <div className="contact-name">
          <TextField
            className="contact-lastname"
            id="outlined-basic"
            label="Lastname"
            variant="outlined"
            name="lastname"
            onChange={this.handleChange}
            onBlur={this.HandleBlurLastName}
            error={!!lastnameIsError}
            helperText={lastnameIsError ? 'lastname is required' : ''}
            value={lastname}
          />
          <TextField
            className="contact-firstname"
            id="outlined-basic"
            label="Firstname"
            variant="outlined"
            name="firstname"
            onChange={this.handleChange}
            onBlur={this.HandleBlurFirstName}
            error={!!firstnameIsError}
            helperText={firstnameIsError ? 'firstname is required' : ''}
            value={firstname}
          />
        </div>
        <TextField
          className="contact-email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={this.handleChange}
          onBlur={this.HandleBlurEmail}
          error={!!emailIsError}
          helperText={emailIsError ? messageErrorEmail : ''}
          value={email}
        />
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
          <option value={3}>Option 3</option>
          <option value={4}>Option 4</option>
        </Select>
        <TextField
          className="contact-message"
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          name="message"
          onChange={this.handleChange}
          onBlur={this.HandleBlurMessage}
          error={!!messageIsError}
          helperText={messageIsError ? 'message is required' : ''}
          value={message}
        />
        <Button variant="contained" onClick={this.handleSubmit}>
          Send
        </Button>
      </div>
    );
  }
}

export default Form;
