import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./../styles.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

const BookCard = (props) => {
  const style = useStyles();
  const [pressed, setPressed] = useState(false);
  return (
    <Card className={style.cardContainer}>
      <CardContent>
        <div className="header">
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <IconButton
            className={style.buttonContainer}
            color="primary"
            onClick={() => {
              pressed
                ? props.handleUnfavorite(props.bookObject)
                : props.handleFavorite(props.bookObject);
              setPressed(!pressed);
            }}
          >
            {pressed ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </div>
        <Typography className={style.author} color="textSecondary">
          by {props.author.toString()}
        </Typography>
        <Typography variant="body2" component="p">
          <b>Publisher:</b> {props.publisher}
          <br />
          <b>Number of Pages:</b> {props.numberOfPages}
          <br />
          <b>Released:</b> {props.released}
        </Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles({
  cardContainer: {
    minWidth: 275,
    maxWidth: "40%",
    boxShadow: "3px 2px 3px 4px gray",

    marginTop: "2%",
    backgroundColor: "#d4d4d4"
  },
  buttonContainer: {
    marginTop: -15,
    marginRight: -10
  },
  title: {
    fontSize: 14
  },
  author: {
    marginBottom: 12,
    fontSize: 13
  }
});

export default BookCard;
