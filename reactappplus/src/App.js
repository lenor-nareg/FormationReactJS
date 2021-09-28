import './App.css';
import MyComponent from './components/MyComponent/MyComponent';
import{MonComposant, MonAutreComposant,} from './components/MultipleComponents/MultipleComponents';
import Header from './components/Header/Header';
import User from './components/User/User';
// import FullName from './components/FullName/FullName';
import Player from './components/Player/Player';



function App() {
  return (
    <div className='App'>
      <header className='App-header'> <Header />( App() )</header>      
      <User  
        firstName='Or'
        lastName='Ro'
        hobbies={["Programmation", "Musique"]}
      />
      <MonComposant />
      <MyComponent/>
      <MonAutreComposant />
      <Player />
      
      <Profile/>

    </div>
  )
}
function Profile({lastName, firstName}) {
  return (
    <div>
      <p>Nom : {lastName}</p>
      <p>Prenom : {firstName}</p>

    </div>
  );
}

export default App;
