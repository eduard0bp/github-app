"use strict";

import React from "react";

const Repositorios = ({ repos }) => (
  <div className="repos">
    <h2>Repositórios:</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

Repositorios.dafaultProps = {
  className: "",
};

Repositorios.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array,
};

export default Repositorios;
