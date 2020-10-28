import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
  <Carousel>
    <div>
      <img
        alt=""
        src="https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/061217_LG_jupiter_main_free.jpg"
      />
      <p className="legend">Jupiter</p>
    </div>
    <div>
      <img
        alt=""
        src="https://www.nasa.gov/sites/default/files/1-bluemarble_west.jpg "
      />
      <p className="legend">Earth</p>
    </div>
    <div>
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
      />
      <p className="legend">Mars</p>
    </div>
    <div>
      <img
        alt=""
        src="https://www.popsci.com/resizer/W7jnUQi0KvvKIqLkoL24ForVX54=/760x570/cloudfront-us-east-1.images.arcpublishing.com/bonnier/GVRV4HR4H5GGBPEEDUPVC6ZG4Q.jpg"
      />
      <p className="legend">Moon</p>
    </div>
  </Carousel>
);
