import { Redirect, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/products">
          <Products />
      </Route>
    </div>
  );
}

export default App;
