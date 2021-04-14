import logo from './logo.svg';
import Student from "./components/Student";
import User from "./components/User"
import './App.css';

function App() {
  console.log(User);
  return (
    <div className="App">
      <Student name={User.name} nickName={User.nickName} age = {User.age} />
    </div>
  );

  
}


export default App;
