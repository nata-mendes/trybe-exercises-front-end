import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const commitments = ['Café da manhã', 'Almoço', 'Café da tarde', 'Jantar'];

function App() {
  return (
    <>
      <Header />
      <ol>
        {commitments.map((element) => Task(element))}
      </ol>
      <Content />
      <Footer />
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
