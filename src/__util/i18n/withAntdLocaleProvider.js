import React from "react";
import { translate } from "react-i18next";

import LocaleProvider from "antd/lib/locale-provider";
// antd locale files
import zhCN from "antd/lib/locale-provider/zh_CN";

const ANTD_LOCALE = {
  "en-US": null, // antd default locale is "en-US"
  "zh-CN": zhCN,
};

function getAntdLocal(i18next) {
  const { language } = i18next;

  return ANTD_LOCALE[language];
}

export default function(WrapperedComponent, options) {
  const Translatable = ({ i18n }) => (
    <LocaleProvider locale={getAntdLocal(i18n)}>
      <WrapperedComponent />
    </LocaleProvider>
  );

  return translate()(Translatable);
}
