import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./Search";

function App() {
    return (
        <div className="App">
            <header>Dictionary</header>
            <div className="container">
                <Search />
            </div>
            <footer>
                <a
                    href="https://github.com/kprathyusha/dictionary-react"
                    target="_blank"
                    rel="noreferrer"
                >
                    Opensource code by
                </a>{" "}
                <span>Prathyusha K</span>
            </footer>
        </div>
    );
}

export default App;
