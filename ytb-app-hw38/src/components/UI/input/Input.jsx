import React, { Component } from "react";
import classes from "./Input.module.css"

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
  }

  async onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue)
  }

  render() {
    return (
      <form
        className={classes.form_wrapper}
        action=""
        onSubmit={(event) => this.onFormSubmit(event)}>

        <input
          className={classes.search_input}
          type="text"
          value={this.state.inputValue}
          placeholder="Enter your request ..."
          onChange={(event) => (this.setState({ inputValue: event.target.value }))}>
        </input>

        <input
          className={classes.search_button}
          type="submit"
          value="Search">
        </input>
      </form>
    )
  }
}