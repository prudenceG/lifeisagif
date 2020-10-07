import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton
} from "react-share";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    minWidth: "auto",
    mawWidth: "100%"
  },
  images: {
    position: "relative",
    height: 200,
    width: "auto",
    margin: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      height: 200,
      margin: "5px"
    },
    "&:hover": {
      "& $imageBackdrop": {
        opacity: 0.7
      },
      "& $imageFacebook": {
        opacity: 1
      }
    }
  },
  imageGIF: {
    height: 200,
    width: "auto"
  },
  imageFacebook: {
    position: "relative",
    left: 0,
    top: 0,
    bottom: 0,
    opacity: 0,
    margin: "5px",
    transition: theme.transitions.create("opacity")
  },
  social: {
    position: "absolute"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create("opacity")
  }
});

const Gif = props => {
  const { classes, gif } = props;

  return (
    <Fragment>
      {gif &&
        <ButtonBase className={classes.images}>
          <img
            className={classes.imageGIF}
            src={gif.images.fixed_height.url}
            alt="gif"
          />
          <span className={classes.imageBackdrop} />
          <div className={classes.social}>
            <FacebookShareButton
              className={classes.imageFacebook}
              children={<FacebookIcon className={`icon-solo`} round />}
              url={gif.images.fixed_height.url}
              hashtag="#LifeIsAGIF"
            />
            <TwitterShareButton
              className={classes.imageFacebook}
              children={<TwitterIcon className={`icon-solo`} round />}
              url={gif.images.fixed_height.url}
              hashtag="#LifeIsAGIF"
            />
          </div>
        </ButtonBase>
      }
    </Fragment>
  );
};

export default withStyles(styles)(Gif);