"use strict";

import React, { Component } from "react";
import AppContent from "./components/app-content";
import ajax from "@fdaciuk/ajax";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repositorios: [],
      favoritos: [],
    };
  }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      ajax()
        .get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
          })
        });
    }
    console.log("change", e.target.value);
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repositorios={this.state.repositorios}
        favoritos={this.state.favoritos}
        handleSearch={(e) => this.handleSearch(e)}
      />
    );
  }
}

export default App;
