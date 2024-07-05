import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./component/NavigationBar";
import NewsBoard from "./component/NewsBoard";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <NavigationBar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
}

export default App;
