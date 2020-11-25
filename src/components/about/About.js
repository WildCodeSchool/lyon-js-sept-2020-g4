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
        'A l’échelle cosmique, l’eau liquide est plus rare que l’or. Hubert Reeves - Astrophysicien',
      avatar:
        'https://cdn.discordapp.com/attachments/768372391960117251/781089297478320138/Romain.png',
      github: 'https://github.com/Rom-mtl',
    },
    {
      name: 'Antoine',
      description:
        "Ca va pas me prendre longtemps, c'est juste une histoire de margin... Laurence Portron Hackaton 2020",
      avatar:
        'https://cdn.discordapp.com/attachments/768372391960117251/781086538737909760/Antoine.png',
      github: 'https://github.com/AntoineGGG',
    },
    {
      name: 'Laurence',
      description:
        "Cet univers ne serait pas grand chose s'il n'abritait pas les gens qu'on aime. Stephen Hawking",
      avatar:
        'https://cdn.discordapp.com/attachments/768372391960117251/781089293304201216/Laurence.png',
      github: 'https://github.com/LaurencePortron',
    },
    {
      name: 'Aymeric',
      description:
        'Les performances individuelles, ce n’est pas le plus important. On gagne et on perd en équipe. Zizou',
      avatar:
        'https://cdn.discordapp.com/attachments/768372391960117251/781089275152171018/Aymeric.png',
      github: 'https://github.com/Abouault',
    },
  ]);

  return (
    <div className="mainAbout">
      <h1 className="devTitle">Dev Team</h1>
      <div className="devCards">
        {teamMember.map((user) => {
          return (
            <div key={user.name} className="all-cards">
              <a href={user.github} target="blank">
                <Card className="card-about">
                  <CardActionArea>
                    <CardMedia
                      style={{ backgroundColor: 'rgba(46, 64, 83, 1)' }}
                    >
                      <img
                        src={user.avatar}
                        alt={user.name}
                        style={{ backgroundColor: 'none' }}
                      />
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
