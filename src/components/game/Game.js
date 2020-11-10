import React from 'react';
import Rules from './Rules';
import Characters from './Characters';

import GameDisplay from './GameDisplay';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRules: true,
      showCharacter: false,
      showGame: false,
    };
  }

  handleClick = () => {
    this.setState({
      showRules: false,
      showCharacter: true,
    });
  };

  handleClickPlay = () => {
    this.setState({
      showCharacter: false,
      showGame: true,
    });
  };

  render() {
    const { showRules } = this.state;
    const { showCharacter } = this.state;
    const { showGame } = this.state;
    return (
      <div>
        <h1>Game</h1>
        <Rules showRules={showRules} handleClick={this.handleClick} />
        <Characters
          showCharacter={showCharacter}
          handleClickPlay={this.handleClickPlay}
        />

        <GameDisplay showGame={showGame} />
      </div>
    );
  }
}

export default Game;
