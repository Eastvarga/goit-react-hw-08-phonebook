import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import store from "./redux/store";
// import { myAction, myAction2 } from "./redux/actions";

// console.log("store is: ", store);
// console.log("store dispatch action is: ", store.dispatch(myAction(5)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
