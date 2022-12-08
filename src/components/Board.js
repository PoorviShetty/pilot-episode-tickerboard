import React from "react";
import { TickerBoard } from "react-ticker-board";
import { useState, useEffect } from "react";

function Board() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.npoint.io/37945ebf43a5bfafe0f9")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const count = 4;
  return (
    <div className="board">
      {loading && (
        <div className="text-center text-white p-3">A moment please...</div>
      )}
      {error && <p>Error!</p>}
      {data && (
        <TickerBoard
          messages={data.message}
          count={count}
          size={24}
          theme={"dark"}
        />
      )}
    </div>
  );
}

export default Board;
