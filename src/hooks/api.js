export const API = async (method, name, d = {}, isFile= false) => {
  if (method == "GET" || method == "DELETE") {
    const data = await fetch("/api/" + name, {
      method: method,
    });
    return await data.json();
  }

  if (isFile && d instanceof FormData) {
    const data = await fetch("/api/" + name, {
      method,
      body: d,
    });
    return await data.json();
  }

  const data = await fetch("/api/" + name, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(d),
  });
  return await data.json();
};
