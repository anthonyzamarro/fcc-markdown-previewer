import "./style/index.css";
import React from "react";
import ReactDOM from "react-dom";
import TextArea from "./components/textarea";
import Preview from "./components/previewer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/inputReducer";

const store = createStore(rootReducer);

function App() {
  return (
    <div className="main-container">
      <TextArea />
      <Preview />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
