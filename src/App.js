import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message";


const myText = "Hello!";

function App() {
  const handleMessageClick = () => {
    console.log("hello!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        My First React App
        </p>
        
        <Message
          myString="my string"
          text={myText}
          onMessageClick={handleMessageClick}
        />
       
      </header>
    </div>
  );
}

export default App;