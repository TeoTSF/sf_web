const getCurrentUser = () => {
  let token = localStorage.getItem("token");
  console.log(token);
  
  return token
};

const actionLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("roleId");
  window.location.reload();
};

const authService = {
  getCurrentUser,
  actionLogout
};

export default authService;
