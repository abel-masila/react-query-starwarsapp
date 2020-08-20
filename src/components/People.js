import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return res.json();
};

const People = () => {
  const { data, status } = useQuery("people", fetchPeople);

  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error loading data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person, idx) => (
            <Person key={idx} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
