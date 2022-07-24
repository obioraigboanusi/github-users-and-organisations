import React from "react";
import endpoints from "../api/endpoints";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import UsersCard from "../components/Users/UsersCard";

export interface IUser {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id?: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

function Users() {
  const { data: users, isLoading, error } = useFetch(endpoints.GET_USERS);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <ul className="list-unstyled row">
      {users.map((user: IUser) => (
        <li key={user.id} className="col-12 col-sm-2 col-md-3">
          <UsersCard {...user} />
        </li>
      ))}
    </ul>
  );
}

export default Users;
