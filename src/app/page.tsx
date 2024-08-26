import Login from "./login/page";

export default function Home() {
  let loggedIn: Boolean = false;
  if (loggedIn === false) {
    return <Login />;
  } else {
    return <p>Home</p>;
  }
}
