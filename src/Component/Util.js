export const checkToken = () => {
  const token = localStorage.getItem("auth");
  if (token) {
    return true
  } else {
    return false
  }
}