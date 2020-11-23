import React from 'react';

import axios from 'axios';
import Button from '@material-ui/core/Button';
import './iss.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

class IssStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationLong: 0,
      locationLat: 0,
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

    const locationArray = [];
    locationArray.push({ locationLat });
    locationArray.push({ locationLong });
  }

  render() {
    const { locationLong, locationLat } = this.state;
    const marker = [locationLat, locationLong];

    return (
      <div className="issContainer">
        <h1>Ou se trouve l'ISS ?</h1>

        <MapContainer center={marker} zoom={1} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={marker}>
            <Popup>
              {`Longitude: ${locationLong} `}
              <br /> {`Latitude: ${locationLat} `}
            </Popup>
          </Marker>
        </MapContainer>

        <Button variant="contained" onClick={this.getLocationIss} type="submit">
          ACTUALISATION
        </Button>
        <p className="longitude">
          Longitude:
          {locationLong}
        </p>
        <p className="latitude">
          Latitude:
          {locationLat}
        </p>
      </div>
    );
  }
}

export default IssStatus;
