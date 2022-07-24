import React from "react";
import { Outlet, useParams } from "react-router-dom";
import endpoints from "../api/endpoints";
import useFetch from "../api/hooks/useFetch";
import Loader from "../components/Loader";
import { ImLocation2 } from "react-icons/im";
import { HiOfficeBuilding } from "react-icons/hi";
import styled from "styled-components";

interface IUserDetails {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string;
  created_at: string;
  email: null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string;
  url: string;
}
function UserDetails() {
  const { userId } = useParams();
  const {
    data: userData,
    isLoading,
    error,
  } = useFetch("users/obioraigboanusi");
  const {
    avatar_url,
    name,
    location,
    followers,
    following,
    bio,
    public_repos,
    company,
  }: IUserDetails = userData || {};

  if (isLoading) {
    return <Loader />;
  }
  console.log({ userData });

  return (
    <section className="container">
      <div className="d-flex flex-column flex-md-row">
        <div className="me-5">
          <StyledAvatar>
            <img className="mb-3" src={avatar_url} alt="Bonnie " />
          </StyledAvatar>
        </div>
        <div className="flex-grow-1">
          <div>
            <h1 className="fw-bold">{name}</h1>
            <p>{bio}</p>
            <p className="d-flex align-items-center">
              <span className="me-3">
                <HiOfficeBuilding />
              </span>
              <span> {company}</span>
            </p>
            <p className="d-flex align-items-center">
              <span className="me-3">
                <ImLocation2 />
              </span>
              <span> {location}</span>
            </p>
          </div>
          <div className="row">
            <Tag className="col-md-4">
              Reposistories <span>{public_repos}</span>
            </Tag>
            <Tag className="col-md-4">
              Followers <span>{followers}</span>
            </Tag>
            <Tag className="col-md-4">
              Following <span>{following}</span>
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <Outlet />
      </div>
    </section>
  );
}
const StyledAvatar = styled.div`
  img {
    width: 100%;
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
`;
const Tag = styled.div`
  span {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #d3d3d390;
  }
`;
export default UserDetails;
