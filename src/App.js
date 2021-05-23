import React from "react";
import Header from "./layout/heading";
import Footer from "./layout/footer";
import Main from "./main";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header />
        <br />
        <Main />
        <Footer />
      </div>
    </DndProvider>
  );
};

export default App;
