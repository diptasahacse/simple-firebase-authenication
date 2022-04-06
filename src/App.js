import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();
  const googleSignInHandler = () => {
    

    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })

  }

  return (
    <div className="App">
      <button onClick={googleSignInHandler}>Sign in with Google</button>

    </div>
  );
}

export default App;
