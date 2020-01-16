import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TechOn from './TechOn.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
    card: {
      align: 'center',
  },
}));

function Services() {
  const classes = useStyles();
  return (
    <div style={{marginLeft: '400px'}} className={classes.root}>
      <h1>Our Services</h1>
      <Grid container spacing={3}>
        <Grid item xs={5}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="PlaceHolder"
          height="140"
          image={TechOn}
          title="PlaceHolder"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Web Development
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={5}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="PlaceHolder"
          height="140"
          image={TechOn}
          title="PlaceHolder"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            App Development
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={5}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="PlaceHolder"
          height="140"
          image={TechOn}
          title="PlaceHolder"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Prototypes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={5}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="PlaceHolder"
          height="140"
          image={TechOn}
          title="PlaceHolder"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Logo 	&amp; Poster Design
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More
        </Button>
      </CardActions>
    </Card>
        </Grid>
    
      </Grid>
    </div>
  );
}
export default Services;