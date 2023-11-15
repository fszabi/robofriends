import React, { Component } from "react";
import Scroll from "./Scroll.jsx";
import CardList from "./CardList.jsx";
import SearchBox from "./SearchBox.jsx";

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
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return (
        <>
          <main className="w-screen h-screen grid place-items-center">
            <section className="py-10">
              <div className="container space-y-10 text-center">
                <h1 className="font-mono text-[#0ccac4] text-6xl font-bold uppercase">
                  Loading...
                </h1>
              </div>
            </section>
          </main>
        </>
      );
    } else {
      return (
        <>
          <main>
            <section className="py-10">
              <div className="container space-y-10 text-center">
                <h1 className="font-mono text-[#0ccac4] text-6xl font-bold uppercase">
                  RoboFriends
                </h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                  <CardList robots={filteredRobots} />
                </Scroll>
              </div>
            </section>
          </main>
        </>
      );
    }
  }
}
