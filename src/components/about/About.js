import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './About.css';
// Création d'un hooks avec la data de la team dev pour "libérer" app.js //
function About() {
  const [teamMember] = useState([
    {
      name: 'Romain',
      description: 'Wild Member',
      avatar:
        'https://avatars2.githubusercontent.com/u/60798921?s=460&u=48f1b5e57ddbad2fa33a2de0c9039b390865d3c3&v=4',
    },
    {
      name: 'Antoine',
      description: 'Wild Member',
      avatar:
        'https://avatars0.githubusercontent.com/u/22123286?s=460&u=6ab7ebfd9efe10808d347b4212da8991f5cac4da&v=4',
    },
    {
      name: 'Laurence',
      description: 'Wild Member',
      avatar:
        'https://avatars3.githubusercontent.com/u/45975914?s=460&u=851118e8619e6645c64ece96dc4c39e39bf6bdb0&v=4',
    },
    {
      name: 'Aymeric',
      description: 'Wild Member',
      avatar: 'https://avatars1.githubusercontent.com/u/65455508?s=460&v=4',
    },
  ]);

  return (
    <div>
      {teamMember.map((user) => {
        return (
          <div key={user.name} className="all-cards">
            <Card className="card-about">
              <CardActionArea>
                <CardMedia>
                  <img src={user.avatar} alt={user.name} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" component="h2" color="textPrimary">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    {user.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default About;
