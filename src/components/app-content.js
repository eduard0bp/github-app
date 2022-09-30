"use strict";

import React from "react";
import Favoritos from "./favoritos";
import Repositorios from "./repositorios";
import Search from "./search";
import UserInfo from "./user-info";
import Actions from "./actions";

const AppContent = () => (
  <div className="app">
    <Search />
    <UserInfo />
    <Actions />

    <Repositorios
      repos={[
        {
          name: "Nome do repositório",
          link: "#",
        },
      ]}
    />

    <Favoritos
      repos={[
        {
          name: "Nome do repositório",
          link: "#",
        },
      ]}
    />
  </div>
);

export default AppContent;
