"use strict";

import React from "react";

const UserInfo = () => (
  <div className="user-info">
    <img src="https://avatars.githubusercontent.com/u/79476975?v=4" />
    <h1 className="username">
      <a href="https://github.com/eduard0bp">Eduardo Batista</a>
    </h1>

    <ul className="repos-info">
      <li>- Repositórios: 16</li>
      <li>- Seguidores: 03</li>
      <li>- Seguindo: 03</li>
    </ul>
  </div>
);

export default UserInfo;
