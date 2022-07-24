import React from "react";

function Error({ error }: { error: string }) {
  return (
    <div className="container h-100 d-flex flex-column align-items-center">
      <h4 className="text-center">ERROR</h4>
      <p className="text-center">{error}</p>
    </div>
  );
}

export default Error;
