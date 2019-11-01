import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { shadows } from "@material-ui/system";
import Logo from "../SLIKI/logo25.png";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { data } from "../Tekst/Nastani";
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    margin: 10
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function RecipeReviewCard(props) {
  const jsondata = require("../Tekst/Nastani.js");

  const content = jsondata.data.content[parseInt(props.Cardid) - 1];
  const cTitle = content.title;
  const cDate = content.datum;
  const txt = content.text;
  const cText = txt.substring(0, 200);
  const imgUrl = content.imgUrl;
  debugger;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <AssignmentIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={cTitle}
        subheader={cDate}
      />
      <CardMedia
        className={classes.media}
        image={require("../SLIKI/s8.jpg")}
        title="Слика5"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {cText}...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Link to="infoNastan">
            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
            >
              ПОВЕЌЕ
            </Button>
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
}
