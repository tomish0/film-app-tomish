import React, { Component } from "react";
import Button from "./Components/Button";
import Filter from "./Components/Filter";
import Movie from "./Components/Movie";
import "./App.css";

class App extends Component {
  state = {
    movieData: [],
    movie: "",
    dataError: ""
  };

  sendRequest = () => {
    this.setState({ movieData: [], dataError: "" });
    fetch(`http://www.omdbapi.com/?apikey=7a752056&t=${this.state.movie}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.Error) {
          return this.setState({ dataError: data.Error });
        } else {
          this.setState({ movieData: data });
          console.log(this.state.movieData);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputTitle = event => {
    event.preventDefault();
    const movie = event.target.value;
    this.setState({ movie });
  };

  render() {
    return (
      <div className="app">
        <h1>What to watch tonight!</h1>
        <div>
          <Movie
            Title={this.state.movieData.Title}
            Year={this.state.movieData.Year}
            Poster={this.state.movieData.Poster}
          />
        </div>
        {this.state.dataError === "Something went wrong." ? (
          <div>Please enter a film</div>
        ) : this.state.dataError ? (
          <div>{this.state.dataError}</div>
        ) : null}
        <div>
          <Filter
            handleInputTitle={this.handleInputTitle}
            movie={this.state.movie}
          />
        </div>
        <div>
          <Button sendRequest={this.sendRequest} />
        </div>
      </div>
    );
  }
}

export default App;
