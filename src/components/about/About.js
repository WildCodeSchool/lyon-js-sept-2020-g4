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
      description:
        'A l’échelle cosmique, l’eau liquide est plus rare que l’or. Hubert Reeves...',
      avatar:
        'https://avatars1.githubusercontent.com/u/60798921?s=460&u=c18c20b2a9dc4b176baf1a6cddb4fa80f6cb89ab&v=4',
      github: 'https://github.com/Rom-mtl',
    },
    {
      name: 'Antoine',
      description:
        "Ca va pas me prendre longtemps, c'est juste une histoire de margin... Laurence Portron Hackaton 2020",
      avatar:
        'https://avatars2.githubusercontent.com/u/22123286?s=460&u=50fe9581384c7582db2dfc1f1d7ca54925bf3c3b&v=4',
      github: 'https://github.com/AntoineGGG',
    },
    {
      name: 'Laurence',
      description:
        "Cet univers ne serait pas grand chose s'il n'abritait pas les gens qu'on aime. Stephen Hawking",
      avatar:
        'https://avatars3.githubusercontent.com/u/45975914?s=460&u=851118e8619e6645c64ece96dc4c39e39bf6bdb0&v=4',
      github: 'https://github.com/LaurencePortron',
    },
    {
      name: 'Aymeric',
      description:
        'Les performances individuelles, ce n’est pas le plus important. On gagne et on perd en équipe. Zizou',
      avatar: 'https://avatars1.githubusercontent.com/u/65455508?s=460&v=4',
      github: 'https://github.com/Abouault',
    },
  ]);

  return (
    <div className="mainAbout">
      <h1>Dev Team</h1>
      <div className="devCards">
        {teamMember.map((user) => {
          return (
            <div key={user.name} className="all-cards">
              <a href={user.github} target="blank">
                <Card className="card-about">
                  <CardActionArea>
                    <CardMedia>
                      <img src={user.avatar} alt={user.name} />
                    </CardMedia>
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="h2"
                        color="textPrimary"
                      >
                        {user.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                      >
                        {user.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
