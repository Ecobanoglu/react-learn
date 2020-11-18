import logo from "./logo.svg";
import "./App.css";

import kareAl, { topla, cikar, carp as c, bol as b } from "./modules/myModule";

import News from "./components/News";
import Proplar from "./components/Proplar";
import Proplar2 from "./components/Proplar2";
import Proplar3 from "./components/Proplar3";
import PropTypes from "./components/PropTypes";

//console.log(kareAl(4));
//console.log(topla(1, 2));
//console.log(cikar(7, 3));
//console.log(c(7, 3));
//console.log(b(7, 3));

function App() {
  const proplar2 = [
    {
      id: 1,
      title: "Başlık 1",
      description: "Açıklama 1",
    },
    {
      id: 2,
      title: "Başlık 2",
      description: "Açıklama 2",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*<News /> */}
        {/*<Proplar />*/}
        {/*<Proplar2 ozellik={proplar2} />*/}
        {/* <Proplar3 ozellik={proplar2} /> */}

        <PropTypes ozellik={proplar2} name="Prop İsmi" />

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
