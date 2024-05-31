import "./App.css";
import Navbar from "./navbar/Navbar";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

function App() {
    let component;
    switch (window.location.pathname) {
        case "/":
            component = <Home />;
            break;
        case "/home":
            component = <Home />;
            break;
        case "/services":
            component = <Portfolio />;
            break;
        case "/about":
            component = <About />;
            break;
        case "/contact":
            component = <Contact />;
            break;
    }
    return (
        <>
            <div className="container">
                <Navbar />
                {component}
            </div>
        </>
    );
}

export default App;
