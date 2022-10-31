import Header from "./components/Header";
import MoviesList from "./components/MovieList";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList />
      {/* We will change this */}
      <Footer />
    </div>
  );
}

export default App;
