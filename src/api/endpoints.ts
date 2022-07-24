const endpoints = {
  GET_USERS: "users",
  GET_USER_Details: (userId: string) => `users/${userId}`,
  GET_USER_REPOS: (userId: string) => `users/${userId}/repos`,
};

export default endpoints;
