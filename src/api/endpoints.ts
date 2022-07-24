const endpoints = {
  GET_USERS: "users",
  GET_USER_Details: (userId: string) => `users/${userId}`,
  GET_USER_REPOS: (userId: string) => `users/${userId}/repos`,
  GET_ORGANISATIONS: "search/users?q=type:org",
};

export default endpoints;
