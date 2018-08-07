import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase , database as default}

/*
// child_removed
database.ref("expenses").on("child_removed", (snapshot) => {
	console.log(snapshot.key, snapshot.val())
});

//child_changed
database.ref("expenses").on("child_changed", (snapshot) => {
	console.log(snapshot.key, snapshot.val())
});

//child_added
database.ref("expenses").on("child_added", (snapshot) => {
	console.log(snapshot.key, snapshot.val())
});*/
