import react from "react";

import classnames from "classnames";

import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from "@material-ui/core"

import useStyles from "./style";

function Newscard(props) {
    const classes = useStyles();
    return (
      <Card className={classnames(classes.card,props.activearticle==(props.i)?classes.activeCard:null)}>
        <CardActionArea href={props.article.url} target="_blank">
          <CardMedia
            className={classes.media}
            image={
              props.article.urlToImage ||
              "https://www.yourenglishweb.com/wp-content/uploads/2018/04/news.png"
            }
          />
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h2">
              {props.article.source.name}
            </Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5">
            {props.article.title}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.article.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Typography variant="h5" color="textSeconadry">
            {props.i + 1}
          </Typography>
        </CardActions>
      </Card>
    );
}

export default Newscard;
