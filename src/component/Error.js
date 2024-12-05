import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <div>{err.data}</div>
      <h1>
        {err.status}:{err.statusText}
      </h1>
      ;
    </div>
  );
}

export default Error;
