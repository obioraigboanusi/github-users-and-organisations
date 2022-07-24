import React from "react";
import endpoints from "../api/endpoints";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import UsersCard from "../components/Users/UsersCard";
import Error from "../components/Error";

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
function Organisations() {
  const {
    data: organasations,
    isLoading,
    error,
  } = useFetch(endpoints.GET_ORGANISATIONS);
  console.log({ organasations });

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error error={error} />;
  }
  return (
    <div className="container">
      <h3 className="my-3">Top Organisations on GitHub</h3>
      <ul className="list-unstyled row">
        {organasations?.items?.map((user: IUser) => (
          <li key={user.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <UsersCard {...user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Organisations;
