import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import { useState } from "react";
import AddButton from "./components/AddButton";
import ReturnButton from "./components/ReturnButton";
import Filter from "./components/Filter";
import { Route, Switch, Link } from "react-router-dom";
import Description from "./components/Description";

function App() {
  const movies = [
    {
      id: 0,
      title: "Chucky",
      description:
        "After a vintage Chucky doll turns up at a suburban yard sale, an idyllic American town is thrown into chaos as a series of horrifying murders begin to expose the town’s hypocrisies and secrets. Meanwhile, the arrival of enemies — and allies — from Chucky’s past threatens to expose the truth behind the killings, as well as the demon doll’s untold origins.",
      posterURL: "images/chucky.jpg",
      rating: 4,
      trailerLink: "https://www.youtube.com/embed/oBNH-PY730k",
    },
    {
      id: 1,
      title: "The Wheel of Timeky",
      description:
        "Follow Moiraine, a member of the shadowy and influential all-female organization called the “Aes Sedai” as she embarks on a dangerous, world-spanning journey with five young men and women. Moiraine believes one of them might be the reincarnation of an incredibly powerful individual, whom prophecies say will either save humanity or destroy it.",
      posterURL: "images/La-Roue-du-temps.jpg",
      rating: 4,
      trailerLink: "https://www.youtube.com/embed/3Fus4Xb_TLg",
    },
    {
      id: 2,
      title: "Riverdale",
      description:
        "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
      posterURL: "images/riverdale.jpg",
      rating: 4.5,
      trailerLink: "https://www.youtube.com/embed/HxtLlByaYTc",
    },
  ];
  const [films, setFilms] = useState(movies);
  const [show, setShow] = useState(false);

  const [keyword, setKeyword] = useState("");
  const [rating, setRating] = useState(0);

  const handleFilter = (e) => {
    setKeyword(e.target.value);
  };
  const handleRating = (e) => setRating(e);

  const filteredMovies = films.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(keyword.toLowerCase()) &&
      movie.rating == rating / 20
    );
  });
  const moviesToDisplay = keyword ? filteredMovies : films;

  const handleAddClickBtn = () => setShow(true);
  const handleReturnClickBtn = () => setShow(false);

  const addMovie = (x) => {
    setFilms([...films, x]);
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <div>
              <h2>Home page</h2>
              {show ? (
                <div>
                  <ReturnButton onClick={handleReturnClickBtn} />
                  <AddMovie addMovie={addMovie} />
                </div>
              ) : (
                <div>
                  <AddButton onClick={handleAddClickBtn} />
                  <Filter
                    keyword={keyword}
                    handleFilter={handleFilter}
                    rating={rating}
                    handleRating={handleRating}
                  />
                  <MovieList moviesToDisplay={moviesToDisplay} {...props}/>
                </div>
              )}
            </div>
          )}
        ></Route>
        <Route
          path={`/:movieTitle`}
          render={(props) => (
            <Description moviesToDisplay={moviesToDisplay} {...props} />
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
