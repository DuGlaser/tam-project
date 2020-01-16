const fetchServer = query => {
  return fetch("http://localhost:8080/query", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: query
    })
  }).then(res => res.json());
};

// TODO:https://github.com/prisma-labs/graphql-request
// fetchとaxiosとこれの技術選定

export default fetchServer;
