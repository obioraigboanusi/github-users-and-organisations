import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSearchUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName) {
      navigate(`/users/${userName}`);
    }
  };
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-6">
          <form className="d-flex" onSubmit={handleSearchUser}>
            <input
              className="me-2 px-3 p-2 flex-grow-1"
              type="search"
              placeholder="Enter username of a user or organisation..."
              aria-label="Search"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Search User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
