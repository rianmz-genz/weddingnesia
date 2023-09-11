async function GuestGetById({ url }) {
  console.log("url", url);
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
}

export default GuestGetById;
