import Header from "./components/Header";
import MoviesList from "./components/MovieList";
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const movie = {
    id: 1,
    posterURL: "https://bocacode.com/assets/images/bc-logos/boca-code-rgb-logo-tag-reversed.png",
    title: "Software Engineering"
  }
  return (
    <div className="App">
      <Header />
      <Movie movie={movie}/>
      <MoviesList />
      {/* We will change this */}
      <Footer />
    </div>
  );
}

export default App;
