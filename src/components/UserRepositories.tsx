import React from "react";
import { useParams } from "react-router-dom";
import endpoints from "../api/endpoints";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import RepoCard from "./RepoCard";

function UserRepositories() {
  const { userId } = useParams();
  const {
    data: userRepos,
    isLoading,
    error,
  } = useFetch(endpoints.GET_USER_REPOS(userId as string));
  console.log({ userRepos });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <ul className="row list-unstyled">
      {userRepos.map((repo: any) => (
        <li className=" col-12 col-sm-6 col-md-3">
          <RepoCard key={repo.id} {...repo} />
        </li>
      ))}
    </ul>
  );
}

export default UserRepositories;
