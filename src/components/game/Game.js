import React from 'react';
import Rules from './Rules';
import Characters from './Characters';
import Test from './Test';
import GameDisplay from './GameDisplay';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRules: true,
      showCharacter: false,
    };
  }

  handleClick = () => {
    this.setState({
      showRules: false,
      showCharacter: true,
    });
  };

  render() {
    const { showRules } = this.state;
    const { showCharacter } = this.state;
    return (
      <div>
        <h1>Game</h1>
        <Rules showRules={showRules} handleClick={this.handleClick} />
        <Characters
          showCharacter={showCharacter}
          handleClick={this.handleClick}
        />
        <Test />
        <GameDisplay />
      </div>
    );
  }
}

export default Game;
