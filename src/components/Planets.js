import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["planets", page],
    fetchPlanets
  );

  return (
    <div>
      <h2>Planets</h2>

      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error loading data</div>}
      {status === "success" && (
        <>
          <button
            onClick={() => {
              setPage((old) => Math.max(old - 1, 1));
            }}
            disabled={page === 1}
          >
            Prev
          </button>
          <span>{page}</span>
          <button
            onClick={() => {
              setPage((old) =>
                !latestData || !latestData.next ? old : old + 1
              );
            }}
            disabled={!latestData || !latestData.next}
          >
            Next
          </button>
          <div>
            {resolvedData.results.map((planet, idx) => (
              <Planet planet={planet} key={idx} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
