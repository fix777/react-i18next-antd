import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import AppCC from "./containers/app-cc/app-cc";
import withI18nextProvider from "./../../__util/i18n/withI18nextProvider";
import withAntdLocaleProvider from "./../../__util/i18n/withAntdLocaleProvider";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppCC />
  </Provider>
);

const Demo = withI18nextProvider(withAntdLocaleProvider(App));

ReactDOM.render(<Demo />, document.getElementById("root"));
