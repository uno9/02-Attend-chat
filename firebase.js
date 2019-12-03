// Initialize Firebase
var config = {
    apiKey: yourkey,
    authDomain: yourkey,
    databaseURL: yourkey,
    projectId: yourkey,
    storageBucket: yourkey,
    messagingSenderId: yourkey
};
firebase.initializeApp(config);

var memberPostRef = firebase.database().ref('/member');