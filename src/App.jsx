import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import bg from "images/bg-1.jpeg";
import { AppHeader, AppFooter } from "./components";
import { VotingContainer } from "components/voting-cards/voting-container";

const App = () => {
  console.log("App component -- render");

  const styles = {
    mainRow: {
      display: "flex",
      justifyContent: "center",
    },
    app: {
      textAlign: "center",
      backgroundImage: `url(${bg})`,
      color: "rgb(255, 255, 255)",
      height: "100vh",
    },
  };

  return (
    <>
      <div style={styles.app}>
        <AppHeader />
        <ToastContainer />
        <VotingContainer />
        <AppFooter />
      </div>
    </>
  );
};

export default App;
