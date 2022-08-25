import { useState, useEffect } from 'react';
import firebase  from '../../assets/firebase/firebase';
import SignUp from '../../components/SignUp-Form/SignUp.component';
import Home from '../Home/Home';



function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        })
    }, []);

    return (
        <div className="">
            {user ? <Home user={user} /> : <SignUp />}
        </div>
    );
}

export default App;