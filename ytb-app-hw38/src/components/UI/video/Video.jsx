import React, { Component } from "react";
import classes from "./Video.module.css"
import { IFRAME_URL, previewImgUrl } from "../../../helper/const";
import Frame from "../frame/Frame";
import Preview from "../listitem/ListItem";

export default class VideoBlock extends Component {
  constructor() {
    super();
    this.state = {
      iframeSrc: "",
      iframeTitle: "",
      description: ""
    }
  }

  onGetVideoID = (previewID, title) => {
    const chosenElem = this.props.videos.find(video => video.id.videoId === previewID);

    this.setState({
      iframeSrc: previewID,
      iframeTitle: title,
      description: chosenElem.snippet.description
    })
  }

  render() {
    return (
      <div className={classes.video_wrapper}>
        <Frame
          src={IFRAME_URL + (!(this.state.iframeSrc) ? this.props.firstFrameURL : this.state.iframeSrc)}
          title="Watch"
          children={(!(this.state.iframeTitle) ? this.props.firstFrameURLIframeTitle : this.state.iframeTitle)}
          description={(!(this.state.description) ? this.props.description : this.state.description)}
        >
        </Frame>

        <div className={classes.video_list}>
          {
            this.props.videos.map((video, index) =>
              <Preview
                key={index}
                id={video.id.videoId}
                src={previewImgUrl(video.id.videoId)}
                alt={video.snippet.title}
                onClick={this.onGetVideoID}
                listItemTitle={video.snippet.title}
              />)
          }
        </div>
      </div>
    );
  }
}

