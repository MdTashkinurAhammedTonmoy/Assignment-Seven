import { Suspense } from "react";
import "./App.css";
import Countbox from "./Components/Countbox";
import Footer from "./Components/Footer";
import Navebar from "./Components/Navebar";
import TaskStatus from "./Components/TaskStatus";

function App() {

  const fatcIssues = fetch('./customer.json').then(res => res.json())

  return (
    <>
      <Navebar></Navebar>
      <Suspense fallback={<h3>Loding.....</h3>}>
        <Countbox fatcIssues={fatcIssues}></Countbox>
        
      </Suspense>
      
      <Footer></Footer>
    </>
  );
}

export default App;





