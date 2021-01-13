import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [text, setText] = useState("programming");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: text,
        },
      });
      setResults(data.query.search);
    };
    if (text) {
      search();
    } else {
      const timeOutId = setTimeout(() => {
        if (text) {
          search();
        }
      }, 1000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [text]);
  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <title>Search</title>
        <input type="text" value={text} onChange={(e) => onInputChange(e)} />
      </form>
      {results.map((result) => {
        return (
          <div>
            <div key={result.pageid}>
              <h1>
                <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                  {result.title}
                </a>
              </h1>
              <p>{result.snippet}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
