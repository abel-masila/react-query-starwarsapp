import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets, {
    staleTime: 2000,
  });

  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error loading data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet, idx) => (
            <Planet key={idx} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
