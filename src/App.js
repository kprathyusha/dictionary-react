import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./Search";

function App() {
    return (
        <div className="App">
            <Search />
            <br />
            <footer>
                <a
                    href="https://github.com/kprathyusha/dictionary-react"
                    target="_blank"
                    rel="noreferrer"
                >
                    Opensource code by
                </a>
                {" "}Prathyusha K
            </footer>
        </div>
    );
}

export default App;
