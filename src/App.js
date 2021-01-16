import React, { useState } from "react";
import "./styles.css";

const database = {
  Marvel: [
    {
      name: "Captain America: The First Avenger",
      rating: "/10",
      director: "Joe Johnston"
    },
    {
      name: "Captain America: Civil War",
      rating: "/10",
      director: "Joe Russo, Anthony Russo"
    },
    {
      name: "Iron Man",
      rating: "7.9/10",
      director: "Jon Faverou"
    },
    {
      name: "Iron Man 2",
      rating: "7/10",
      director: "Louis Leterrier"
    },
    {
      name: "Iron Man 3",
      rating: "7.2/10",
      director: "Shane Black"
    },
    {
      name: "Thor",
      rating: "7/10",
      director: "Kenneth Branagh"
    },
    {
      name: "Thor The Dark World",
      rating: "6.9/10",
      director: "Alan Taylor"
    },
    {
      name: "Thor: Ragnarok",
      rating: "7.9/10",
      director: "Taika Waititi"
    },
    {
      name: "The Avengers",
      rating: "8/10",
      director: "Joss Whedon"
    },
    {
      name: "Avengers:Age Of Ultron",
      rating: "7.3/10",
      director: "Joss Whedon"
    },
    {
      name: "Avengers: Infinity War",
      rating: "8.4/10",
      director: "Joe Russo, Anthony Russo"
    },
    {
      name: "Avengers: Endgame",
      rating: "/10",
      director: "Joe Russo, Anthony Russo"
    }
  ],
  Horror: [
    {
      name: "The Shining",
      rating: "8.4/10",
      director: "Stanley Kubrick"
    },
    {
      name: "Psycho",
      rating: "8.5/10",
      director: "Alfred Hitchcock"
    },
    {
      name: "Get Out",
      rating: "7.7/10",
      director: "Jordan Peele"
    },
    {
      name: "Train To Busan",
      rating: "7.6/10",
      director: "Sang-ho Yeon"
    }
  ],
  "Sci-Fi": [
    {
      name: "Interstellar",
      rating: "8.6/10",
      director: "Christopher Nolan"
    },
    {
      name: "Edge of Tomorrow",
      rating: "7.9/10",
      director: "Doug Liman"
    },
    {
      name: "Inception",
      rating: "8.8/10",
      director: "Christopher Nolan"
    },
    {
      name: "Ready Player One",
      rating: "7.5/10",
      director: "Steven Spielberg"
    }
  ],

  Thriller: [
    {
      name: "Mad Max: Fury Road",
      rating: "8.1/10",
      director: "George Miller"
    },
    {
      name: "Shutter Island",
      rating: "8.2/10",
      director: "Martin Scorsese"
    },
    {
      name: "Parasite",
      rating: "8.6/10",
      director: "Bong Joon Ho"
    }
  ]
};

var list = Object.keys(database); //Converting db object to list of keys

export default function App() {
  const [genre, setGenre] = useState(""); //state to set genre

  //Click event handler for buttons
  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 className="title" style={{ paddingTop: "1rem" }}>
        goodmovies
      </h1>
      {/* Generating genre buttons using map function */}
      <div className="genre-container">
        {list.map((genre) => {
          return (
            <button
              className="btn-genre"
              onClick={() => clickHandler(genre)}
              key={genre}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />

      {/* Output Processing */}
      <div>
        {genre ? (
          database[genre].map((movie) => {
            return (
              <li
                className="list-movie"
                style={{ listStyle: "none" }}
                key={movie.name}
              >
                <div style={{ fontSize: "1.4rem" }}>{movie.name}</div>
                <div style={{ fontSize: "smaller" }}>
                  IMDB Rating: {movie.rating}
                </div>
                <div style={{ fontSize: "smaller" }}>
                  Director: {movie.director}
                </div>
              </li>
            );
          })
        ) : (
          <p style={{ fontSize: "larger" }}>Please select a genre!!</p>
        )}
      </div>
    </div>
  );
}
