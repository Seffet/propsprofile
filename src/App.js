
import './App.css';
import Profile from './profile/Profile';

function App() {
const profession = "this is my future profession coding "
const bio = "this is bio:....."
  const handleName= () => {
    alert('Hello im skander')
  }
  return (
    <div className="App">
      <Profile name={"skander hidri"}  age={23} profession={profession}  bio={bio} handleName={handleName}>
        <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/87793628_2923341301052170_1429271657620439040_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Rkm51teqQD0AX9fKZMG&_nc_ht=scontent.ftun1-2.fna&oh=00_AT9687err1pyvYGGYhrFEPrk22fdYtq5NitUgGjr2ygIYQ&oe=6254587E" alt="hello" style={{width:"470px" , borderRadius:"50%"}} />
        </Profile> 
    </div>
  );
}

export default App;
