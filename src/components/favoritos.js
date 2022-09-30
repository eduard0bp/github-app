"use strict";

import React from "react";

const Favoritos = ({ repos }) => (
  <div className="starred">
    <h2>Favoritos:</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

Favoritos.dafaultProps = {
  className: "",
};

Favoritos.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array,
};

export default Favoritos;
