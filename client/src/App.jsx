import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Profile from "./pages/Profile.jsx";
import { UserContextProvider } from "./context/userContext.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Navbar />
          <Routes>
            <Route path="/posts" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts/post/:id" element={<PostDetails />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/update/:id" element={<EditPost />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route />
          </Routes>
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
