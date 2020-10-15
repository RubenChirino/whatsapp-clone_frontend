import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbbJnlqqrI75RIaNZ5oE9t8W6ltunskbA",
    authDomain: "whatsapp-mern-e6763.firebaseapp.com",
    databaseURL: "https://whatsapp-mern-e6763.firebaseio.com",
    projectId: "whatsapp-mern-e6763",
    storageBucket: "whatsapp-mern-e6763.appspot.com",
    messagingSenderId: "628827285332",
    appId: "1:628827285332:web:f37716b9fa33e80c758ac1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };



