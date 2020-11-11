import React from 'react';
import axios from 'axios';
import './iss.css';

class IssStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationLong: '',
      locationLat: '',
    };
    this.getLocationIss = this.getLocationIss.bind(this);
  }

  componentDidMount() {
    this.getLocationIss();
  }

  getLocationIss() {
    // Send the request
    axios
      .get('http://api.open-notify.org/iss-now.json')

      .then((res) => {
        this.setState({
          locationLong: res.data.iss_position.longitude,
          locationLat: res.data.iss_position.latitude,
        });
      });

    /// /////////////////////////////////
    const { locationLong, locationLat } = this.state;
    const canvas = document.getElementById('map');
    const ctx = canvas.getContext('2d');
    const locationArray = [];
    locationArray.push({ locationLat });
    locationArray.push({ locationLong });
    ctx.strokeStyle = 'green';
    // MISE EN PLACE DU RENDU D'UN POINT SUR LA MAP
    // locationArray.forEach(function (place) {
    //   ctx.rect(
    //     // turn a longitude value into a screen
    //     // pixel: the left side of the page is 0, not
    //     // 180, so add 180 to the value and then
    //     // scale up by 2 to make the drawing 640px
    //     // wide
    //     (place[0] + 180) * 2,
    //     // turn a latitude value into a screen
    //     // pixel. unlike pixels, latitude ranges
    //     // from high values on the top to low on the bottom
    //     // doing 90 - lat flips them.
    //     (90 - place[1]) * 2,
    //     10,
    //     10
    //   );
    // });
    ctx.fill();
  }

  render() {
    const { locationLong, locationLat } = this.state;
    return (
      <div>
        <div className="issContainer">
          <h1>Ou se trouve l'ISS ?</h1>
          <canvas id="map" width="640" height="360" />
          <button
            onClick={this.getLocationIss}
            type="submit"
            variant="contained"
            color="primary"
          >
            ACTUALISATION
          </button>
          <p className="longitude">
            Longitude:
            {locationLong}
          </p>
          <p className="latitude">
            Latitude:
            {locationLat}
          </p>
        </div>
      </div>
    );
  }
}

export default IssStatus;
