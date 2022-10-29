import "./App.css";
import AddContak from "./components/AddContact";
import ListContact from "./components/ListContact";

function App() {
    return (
        <div className="App">
            <h2>Contact Application</h2>
            <div style={{ display: "flex", flexDirection: "row", gap: 150 }}>
                <AddContak />
                <ListContact />
            </div>
        </div>
    );
}

export default App;
