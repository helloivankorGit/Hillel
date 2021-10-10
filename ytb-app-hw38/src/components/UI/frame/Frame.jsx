import React, { Component } from "react";
import classes from "./Frame.module.css"

export default class Frame extends Component {
  render() {
    const { src, title, children, description } = this.props;
    return (
      <div className={classes.videoframe_block}>
        <iframe
          className={classes.video_frame}
          src={src}
          title={title}>
        </iframe>

        <div className={classes.frame_text_block}>
          <h1 className={classes.video_title}>{children}</h1>
          <p className={classes.video_description}>{description}</p>
        </div>
      </div>
    );
  }
}

