import React, { Component } from "react";
import "../css/style.css";
import Input from "./UI/input/Input";
import Video from "./UI/video/Video";
import { youtubeAxios } from "../api/youtube";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      firstFrameURL: "",
      firstFrameURLIframeTitle: "",
      firstDescription: ""
    }
  }

  onSearchSubmit = async (query) => {
    const { data: { items } } = await youtubeAxios.get('/search', {
      params: {
        q: query
      }
    })
    this.setState({
      videos: items,
      firstFrameURL: items[0].id.videoId,
      firstFrameURLIframeTitle: items[0].snippet.description,
      firstDescription: items[0].snippet.title
    })
  }

  render() {
    const { videos, firstFrameURL, firstFrameURLIframeTitle, firstDescription } = this.state;
    return (
      <React.Fragment>
        <Input onSubmit={this.onSearchSubmit} />
        <Video
          videos={videos}
          firstFrameURL={firstFrameURL}
          firstFrameURLIframeTitle={firstFrameURLIframeTitle}
          firstDescription={firstDescription} />
      </React.Fragment>
    )
  }
}