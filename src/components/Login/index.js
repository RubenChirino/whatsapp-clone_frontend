import React from 'react';
import './styles.css';

//IMAGES
import wsLogo from '../../images/ws_logo.png';

//MATERIAL UI
import { Button } from '@material-ui/core';

//FIREBASE 
import { auth, provider } from '../../firebase';

function Login({ setUser }) {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            //let userInfo = result.user;
            /* window.sessionStorage.setItem('web', {
                userName: userInfo.displayName,
                email: userInfo.email,
                profileImg: userInfo.photoURL,
            }); */
            setUser(result.user);

        }).catch(error => console.error(error.message));
    };

    return (
        <div className="Login">
            <div className="login__logo">
                <img src={wsLogo} alt="Whatsapp Logo"/>
            </div>

            <Button onClick={signIn} type="submit" > 
                Sign In
            </Button>

        </div>
    )
}

export default Login