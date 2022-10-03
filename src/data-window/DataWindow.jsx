import React, { useEffect, useState } from "react";

export const DataWindowContext = React.createContext();

export function DataWindow({ children }) {
  // TODO: use Redux or Context
  let [entities, setEntities] = useState({});
  useEffect(() => {
    fetch("http://localhost:4000/tasks")
      .then((response) => response.json())
      .then((result) => {
        setEntities(result);
      })
      .catch((error) => {
        setEntities({}); // TODO error handling
      });
  }, []);

  const contextValue = { entities };

  return (
    <div>
      <DataWindowContext.Provider value={contextValue}>
        {children}
      </DataWindowContext.Provider>
    </div>
  );
}
