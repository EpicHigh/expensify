import { firebase, googleProvider } from "../db/firebase";

const login = uid => ({
  type: "LOGIN",
  uid
});

const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleProvider);
  };
};

const logout = () => ({
  type: "LOGOUT"
});

const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export { startLogin, startLogout, login, logout };
