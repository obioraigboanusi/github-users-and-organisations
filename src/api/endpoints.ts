const endpoints = {
  GET_USERS: "users",
  GET_USER_Details: (userId: string) => `users/${userId}`,
};

export default endpoints;
