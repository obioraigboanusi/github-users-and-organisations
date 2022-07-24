import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../pages/Users";
import styled from "styled-components";

function UsersCard({ avatar_url, login }: IUser) {
  return (
    <Link to={`/users/${login}`}>
      <StyledCard className="card text-center">
        <div className="card-body">
          <img src={avatar_url} alt="Bonnie " />
          <h3 className="card-title">{login}</h3>
        </div>
      </StyledCard>
    </Link>
  );
}
const StyledCard = styled.div`
  img {
    width: 100px;
    height: 100px;
    margin-inline: auto;
    border-radius: 50%;
  }
  h3 {
    text-decoration: none;
    color: unset;
    font-size: 1.5rem;
  }
`;

export default UsersCard;
