import logo from "./logo.svg";
import "./App.css";

import kareAl, { topla, cikar, carp as c, bol as b } from "./modules/myModule";

console.log(kareAl(4));
console.log(topla(1, 2));
console.log(cikar(7, 3));
console.log(c(7, 3));
console.log(b(7, 3));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p></p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
