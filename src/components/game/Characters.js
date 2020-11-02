import React from 'react';
import './Character.css';

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Characters">
        <h2>Choose a Character</h2>
      </div>
    );
  }
}

export default Characters;
