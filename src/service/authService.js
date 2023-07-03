const doLogIn = (username) => {
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("isLoggedIn", true);
};

const isLoggedIn = () => {
  return Boolean(sessionStorage.getItem("isLoggedIn"));
};

const logOut = (props) => {
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("isLoggedIn");
  props.history.push("/login");
};

export default {
  doLogIn,
  isLoggedIn,
  logOut,
};
