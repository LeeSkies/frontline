import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import Home from "./features/Home";
import Auth from "./features/Auth";
import "./index.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/mail/inbox"} />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/mail/:type?" element={<Home />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
