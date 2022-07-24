import React from "react";
import { Tag } from "../pages/UserDetails";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { RiToolsLine } from "react-icons/ri";
interface IRepoCardProps {
  name: string;
  stargazers_count: number;
  forks: number;
  language: string;
  description: string;
  html_url: string;
}
function RepoCard({
  name,
  stargazers_count,
  forks,
  language,
  description,
  html_url,
}: IRepoCardProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex mb-3">
          <Tag className=" me-3">
            <BiGitRepoForked />

            <span className="ms-1">{forks}</span>
          </Tag>
          <Tag className="me-3">
            <AiOutlineStar />

            <span className="ms-1">{stargazers_count}</span>
          </Tag>
          <Tag className="">
            <RiToolsLine />

            <span className="ms-1">{language}</span>
          </Tag>
        </div>
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default RepoCard;
