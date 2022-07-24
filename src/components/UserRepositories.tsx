import React from "react";
import { useParams } from "react-router-dom";
import endpoints from "../api/endpoints";
import useFetch from "../hooks/useFetch";
import Error from "./Error";
import Loader from "./Loader";
import RepoCard from "./RepoCard";

function UserRepositories() {
  const { userId } = useParams();
  const {
    data: userRepos,
    isLoading,
    error,
    } = useFetch(endpoints.GET_USER_REPOS(userId as string));
    
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error error={error} />;
  }
  return (
    <>
      {userRepos.length > 0 ? (
        <ul className="row list-unstyled">
          {userRepos.map((repo: any) => (
            <li key={repo.id} className=" col-12 col-sm-6 col-md-4">
              <RepoCard key={repo.id} {...repo} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No public Reposistories found</p>
      )}
    </>
  );
}

export default UserRepositories;
