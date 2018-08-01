import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBqPBlMD1Hj7pJCZ52kUQ-o6xlnO451Edk",
  authDomain: "my-expensifier.firebaseapp.com",
  databaseURL: "https://my-expensifier.firebaseio.com",
  projectId: "my-expensifier",
  storageBucket: "my-expensifier.appspot.com",
  messagingSenderId: "305806075750"
};

firebase.initializeApp(config);

const database = firebase.database();

/*database.ref("expenses").push({
  description: "Rent",
  note: "Just a first month",
  amount: 12500,
  createdAt: 1533036980
});

database.ref("expenses").push({
  description: "Water bill",
  note: "Don't forget charge from my friend 25%",
  amount: 500,
  createdAt: 1533037061
});*/
// After, any values had changed, This method was called.
// If you change "value" to "child_removed" then it logs every time after children will have been removed.
database
  .ref("expenses")
  .on("value", DataSnapshot => {
    const expenses = [];
    DataSnapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  })
  .catch(err => console.error(err));

database
  .ref("expenses")
  .once("value")
  .then(DataSnapshot => {
    const expenses = [];
    DataSnapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  })
  .catch(err => console.error(err));
