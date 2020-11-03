import React from 'react';
import Rules from './Rules';
import Characters from './Characters';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRules: true,
      showCharacter: false,
      male: false,
      female: false,
    };
  }

  handleClick = () => {
    this.setState({
      showRules: false,
      showCharacter: true,
      male: true,
      female: true,
    });
  };

  render() {
    const { showRules } = this.state;
    const { male } = this.state;
    const { female } = this.state;
    const { showCharacter } = this.state;
    return (
      <div>
        <h1>Game</h1>
        <Rules showRules={showRules} handleClick={this.handleClick} />
        <Characters showCharacter={showCharacter} male={male} female={female} />
      </div>
    );
  }
}

export default Game;
