import React from "react";
import { Trans } from "react-i18next";

import Button from "antd/lib/button";
import Pagination from "antd/lib/pagination";
import "antd/lib/button/style/css";
import "antd/lib/pagination/style/css";

import logo from "./logo.svg";
import "./app-pc.css";

const AppPc = ({ t, changeLanguage }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{t("title")}</h2>
      <Button onClick={changeLanguage("zh-CN")}>简体中文</Button>
      <Button onClick={changeLanguage("en-US")}>English</Button>
    </div>
    <div className="App-intro">
      <Trans i18nKey="description.part1">
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans>
    </div>
    <div>{t("description.part2")}</div>
    <div className="example">
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </div>
  </div>
);

export default AppPc;
