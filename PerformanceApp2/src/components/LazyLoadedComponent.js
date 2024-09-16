import React from "react";

const LazyLoadedComponent = () => {
  console.log("LazyLoadedComponent loaded");
  return <h2>This is a lazily loaded component!</h2>;
};

export default LazyLoadedComponent;
