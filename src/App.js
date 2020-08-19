import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Layout from "./components/Mainlayout";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout></Layout>
      </div>
    </Provider>
  );
}

export default App;
