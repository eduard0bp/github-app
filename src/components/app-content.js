"use strict";

import React, { PropTypes } from "react";
import Favoritos from "./favoritos";
import Repositorios from "./repositorios";
import Search from "./search";
import UserInfo from "./user-info";
import Actions from "./actions";

const AppContent = ({ userinfo, repositorios, favoritos, handleSearch }) => (
  <div className="app">
    <Search handleSearch={handleSearch} />

    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions />}

    {!!repositorios.length && <Repositorios repositorios={repositorios} />}

    {!!favoritos.length && <Favoritos favoritos={favoritos} />}
  </div>
);

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repositorios: PropTypes.array.isRequired,
  favoritos: PropTypes.array.isRequired,
};

export default AppContent;
