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
          <h1>Bienvenu(e)</h1>
          <p>
            Savez-vous vraiment de quoi est composé le système solaire ? Vous
            trouverez sur cette page une présentation détaillée de ce qui
            compose le système solaire : Notre étoile le Soleil et ses planètes
          </p>
          <Button
            type="submit"
            onClick={this.onClick}
            variant="contained"
            color="primary"
          >
            Commencer le voyage
          </Button>
        </div>
      )
    );
  }
}

export default Start;
