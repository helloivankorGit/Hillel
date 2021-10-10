import React, { Component } from "react";
import classes from "./ListItem.module.css"

export default class Preview extends Component {
  render() {
    const { id, src, alt, onClick, listItemTitle } = this.props
    return (
      <div className={classes.preview_block}>
        <div className={classes.preview_img}>
          <img
            id={id}
            src={src}
            alt={alt}
            onClick={(event) => { onClick(event.target.id, event.target.alt) }} />
        </div>
        <p className={classes.preview_title}>{listItemTitle}</p>
      </div>
    );
  }
}

