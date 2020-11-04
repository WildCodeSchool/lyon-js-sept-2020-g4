import React from 'react';
import './start.css';
import Button from '@material-ui/core/Button';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: true,
    };
  }

  onClick = () => {
    this.setState({
      showInfo: false,
    });
  };

  render() {
    const { showInfo } = this.state;

    return (
      showInfo && (
        <div className="accessApp">
          <h1>Welcome</h1>
          <p>
            How much do you know about our solar system? Let's dive into a
            detailed presentation of our Star the Sun and its planets!
          </p>

          <button type="submit" onClick={this.onClick}>
            START YOUR JOURNEY
          </button>
        </div>
      )
    );
  }
}

export default Start;
