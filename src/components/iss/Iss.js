import React from 'react';
import axios from 'axios';
import './iss.css';

class IssStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iss: [],
      locationLong: '',
      locationLat: '',
    };
    this.getLocationIss = this.getLocationIss.bind(this);
  }

  getLocationIss() {
    // Send the request
    axios
      .get('http://api.open-notify.org/iss-now.json')

      .then((res) => {
        this.setState({
          iss: res.data,
          locationLong: res.data.iss_position.longitude,
          locationLat: res.data.iss_position.latitude,
        });
      });

    /// /////////////////////////////////

    const canvas = document.getElementById('map');
    const ctx = canvas.getContext('2d');
    const locationArray = [];
    locationArray.push(this.state.locationLat);
    locationArray.push(this.state.locationLong);
    ctx.strokeStyle = 'green';
    locationArray.forEach(function (place) {
      ctx.rect(
        // turn a longitude value into a screen
        // pixel: the left side of the page is 0, not
        // 180, so add 180 to the value and then
        // scale up by 2 to make the drawing 640px
        // wide
        (~~place[0] + 180) * 2,
        // turn a latitude value into a screen
        // pixel. unlike pixels, latitude ranges
        // from high values on the top to low on the bottom
        // doing 90 - lat flips them.
        (90 - ~~place[1]) * 2,
        10,
        10
      );
    });
    ctx.fill();
  }

  componentDidMount() {
    this.getLocationIss();
  }

  render() {
    return (
      <div className="issContainer">
        <h1>Ou se trouve l'ISS ?</h1>
        <canvas id="map" width="640" height="360" />
        <button onClick={this.getLocationIss} type="submit">
          ACTUALISATION
        </button>
        <p className="longitude">
          Longitude:
          {this.state.locationLong}
        </p>
        <p className="latitude">
          Latitude:
          {this.state.locationLat}
        </p>
      </div>
    );
  }
}

export default IssStatus;
