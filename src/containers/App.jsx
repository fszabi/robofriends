import { useState, useEffect } from "react";
import Scroll from "../components/Scroll.jsx";
import CardList from "../components/CardList.jsx";
import SearchBox from "../components/SearchBox.jsx";

export default function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

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
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        </section>
      </main>
    </>
  );
}
