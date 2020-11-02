import React from 'react';
import './Rules.css';

class Rules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showrules: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ showrules: false });
  };

  // display none charachter puis display block onclick
  // mettre la div du character en display none (false )

  render() {
    const { showrules } = this.state;

    return (
      showrules && (
        <div className="Rules">
          <h2>Rules</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi
          </p>
          <button type="submit" onClick={this.handleClick}>
            Choose a Character
          </button>
        </div>
      )
    );
  }
}

export default Rules;
