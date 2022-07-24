import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../pages/Users";
import styled from "styled-components";

function UsersCard({ avatar_url, login }: IUser) {
  return (
    <Link to={`/users/${login}`}>
      <StyledCard>
        <div>
          <img src={avatar_url} alt="Bonnie " />
          <h5>{login}</h5>
        </div>
      </StyledCard>
    </Link>
  );
}
const StyledCard = styled.div``;

export default UsersCard;
