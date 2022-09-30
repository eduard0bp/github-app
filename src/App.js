"use strict";

import React from "react";
import Actions from "./components/actions";
import Favoritos from "./components/favoritos";
import Repositorios from "./components/repositorios";
import Search from "./components/search";
import UserInfo from "./components/user-info";

const App = () => (
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

export default App;
