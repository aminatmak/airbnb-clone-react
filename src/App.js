import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  render() {

    const flat = {
      "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      "price": 164,
      "priceCurrency": "EUR",
      "lat": 48.884211,
      "lng": 2.346890
    };

    return (
      <div>
        <Flat flat={flat} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
