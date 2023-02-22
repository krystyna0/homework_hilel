import {Routes, Route, Link, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";


const App = () => {
    return (
        <div className="App">
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/posts"}>Posts</NavLink>
            </nav>

            <h1>app component</h1>



            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/posts' element={<Posts/>} />
                <Route path='/posts/:id' element={<Post/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </div>
    );
};

export default App;