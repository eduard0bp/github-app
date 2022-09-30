"use strict";

import React, { PropTypes } from "react";

const Favoritos = ({ favoritos }) => (
  <div className="starred">
    <h2>Favoritos:</h2>
    <ul>
      {favoritos.map((fav, index) => (
        <li key={index}>
          <a href={fav.link}>{fav.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

Favoritos.dafaultProps = {
  className: "",
};

Favoritos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  favoritos: PropTypes.array,
};

export default Favoritos;
