const matcher = (str1, str2) => {
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};

const setJWT = (email) => {
  fetch("https://guarded-river-88298.herokuapp.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      localStorage.setItem("accessToken", result.token);
    });
};

export { matcher, setJWT };
