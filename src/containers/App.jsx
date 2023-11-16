import React, { Component } from "react";
import Scroll from "../components/Scroll.jsx";
import CardList from "../components/CardList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <>
        <main className="grid place-items-center">
          <section className="py-10">
            <div className="container space-y-10 text-center">
              <h1 className="font-mono text-[#0ccac4] text-6xl font-bold uppercase">
                Loading...
              </h1>
            </div>
          </section>
        </main>
      </>
    ) : (
      <>
        <main>
          <section className="py-10">
            <div className="container space-y-10 text-center">
              <h1 className="font-mono text-[#0ccac4] text-6xl font-bold uppercase">
                RoboFriends
              </h1>
              <SearchBox searchChange={this.onSearchChange} />
              <Scroll>
                <ErrorBoundary>
                  <CardList robots={filteredRobots} />
                </ErrorBoundary>
              </Scroll>
            </div>
          </section>
        </main>
      </>
    );
  }
}
