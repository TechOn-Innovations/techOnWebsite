import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: '80vw',
    display: "flex",
    height:"70vh",
    alignItems:"center"
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          alt="Techon"
          image= "./placeholder.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

