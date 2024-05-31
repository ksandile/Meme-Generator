import './App.css';
import Header from "./Header"
import Meme from "./Meme"

/**
 * App component
 * This is the main component of the Meme Generator application. It renders the Header and Meme components.
 */
function App() {
  return (
    <div className="App">
        {/* Render the Header component */}
        <Header />
        {/* Render the Meme component */}
        <Meme />
    </div>
  );
}

export default App;