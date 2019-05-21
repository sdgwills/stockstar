import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { hidden } from 'ansi-colors';
// import loading_gif from '../News/output.gif';

const styles = {
  card: {
    maxWidth: 400,
    margin: 10,
    
  },
  media: {
    height: 225,
    width: 400
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    
      
<div>
  {props.news_card ?
      <Card className={classes.card}>
        
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.news_card.image_url}
            title=""
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="h2">
              {props.news_card.title}
            </Typography>
            <Typography component="p">
              {props.news_card.text}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        
      
      </Card>
    
        :
        <div className='loading-container'>
          nope
        </div>
      }
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);