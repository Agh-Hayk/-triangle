import "./App.css";
import Input from "./components/Input";
import Content from "./components/Content";
import Button from "./components/Button";
import { useState } from "react";

function App() {
   const [count, setCount] = useState(0);
   const [reverse, setReverse] = useState(false);

   function getArr() {
      let arr = [];
      let el = "";
      for (let i = 0; i < count; i++) {
         el = el + "*";
         arr.push(<p>{el}</p>);
      }

      return arr;
   }

   return (
      <div className="App">
         <Input setCount={setCount} />
         <Content getArr={getArr} reverse={reverse} />
         <Button setReverse={setReverse} reverse={reverse} />
      </div>
   );
}

export default App;
