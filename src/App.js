"use strict";

import React, { Component } from "react";
import AppContent from "./components/app-content";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: {
        username: "Eduardo Batista",
        repos: 16,
        followers: 3,
        following: 3,
      },
      repositorios: [
        {
          name: "Repositório",
          link: "#",
        },
      ],
      favoritos: [
        {
          name: "Repositório",
          link: "#",
        },
      ],
    };
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repositorios={this.state.repositorios}
        favoritos={this.state.favoritos}
      />
    );
  }
}

export default App;
