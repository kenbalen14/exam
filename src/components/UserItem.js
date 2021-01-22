import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import cardBg1 from '../assets/img/mountain-2201212_1920.jpg';
import cardBg2 from '../assets/img/green-forest.jpg';
import profile1 from '../assets/img/profile1.jpg';



const UserItem = ({ id, name, email, body, onItemClicked }) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
      cursor: "pointer",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatarHolder:{
      textAlign: "center",
      position: 'relative',
      top: '-60px',
      height: '60px',
    },
    avatar: {
      backgroundColor: red[500],
      width: theme.spacing(14),
      height: theme.spacing(14),
      border: "4px solid #eee",
      margin:"0 auto",
    },
    nameholder: {
      textAlign: "center",
      marginTop: "10px",
      marginBottom: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: '0 24px',
    },
    emailHolder: {
      textAlign: "center",
      margin: 0,
      color: 'rgba(0, 0, 0, 0.54)',
    },

  }));

  const classes = useStyles();


  return (
  <Grid item xs={12} sm={6} md={3}>
    <Card className={classes.root} onClick={onItemClicked}>
    {id % 2 == 0
      ? <CardMedia
        className={classes.media}
        image={cardBg1}
      />
      : <CardMedia
        className={classes.media}
        image={cardBg2}
      />
    }
      <div className={classes.avatarHolder}>

        {id % 2 == 0
      	? <Avatar alt={name} src={profile1} className={classes.avatar} />

      	: <Avatar alt={name} src className={classes.avatar} />
        }

      </div>
        <Typography variant="h6" gutterBottom className={classes.nameholder}>
         {name}
       </Typography>
       <Typography variant="caption" display="block" gutterBottom className={classes.emailHolder}>
        {email}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className="detailsHolder">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Contact on Facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="Contact on Twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="Contact on Instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="Contact on LinkedIn">
          <LinkedInIcon />
        </IconButton>
      </CardActions>
    </Card>
</Grid>

  );
};

export default UserItem;
