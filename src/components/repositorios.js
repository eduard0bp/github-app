"use strict";

import React, { PropTypes } from "react";

const Repositorios = ({ repositorios }) => (
  <div className="repos">
    <h2>Repositórios:</h2>
    <ul>
      {repositorios.map((repos, index) => (
        <li key={index}>
          <a href={repos.link}>{repos.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

Repositorios.dafaultProps = {
  className: "",
};

Repositorios.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array,
};

export default Repositorios;
