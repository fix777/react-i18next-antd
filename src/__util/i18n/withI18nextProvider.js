import React from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n";

export default function(WrappedComponent) {
  return () => (
    <I18nextProvider i18n={i18n}>
      <WrappedComponent />
    </I18nextProvider>
  );
}
