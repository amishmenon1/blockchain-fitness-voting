import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Row from "react-bootstrap/Row";
import { AppHeader, AppFooter } from "./components";
import { AccountDisplay } from "./components/user";

const App = () => {
  console.log("App component -- render");

  const styles = {
    mainRow: {
      display: "flex",
      justifyContent: "center",
    },
  };

  return (
    <>
      <div className="App">
        <AppHeader />
        <ToastContainer />
        <Row style={styles.mainRow}>
          <AccountDisplay />
        </Row>
        <AppFooter />
      </div>
    </>
  );
};

export default App;
