import React, { Component } from "react";
import { connect } from "react-redux";
import { translate } from "react-i18next";

import AppPc from "./../../components/app-pc/app-pc";

class App extends Component {
  changeLanguage = lng => () => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  };

  render() {
    const { t } = this.props;

    return <AppPc t={t} changeLanguage={this.changeLanguage} />;
  }
}

export default translate()(connect(state => state)(App));
