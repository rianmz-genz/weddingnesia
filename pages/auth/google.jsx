"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

const baseUrl = process.env.BACKEND_BASE_URL;

function GoogleCallback() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [user, setUser] = useState(null);
  let isCalled = false;

  const router = useRouter();
  const path = router.asPath;
  const params = path.substring(12, path.length - 1);

  const apiUrl = useMemo(
    () => `${baseUrl}/auth/callback/google${params}`,
    [params]
  );

  useEffect(() => {
    if (isCalled) return;

    isCalled = true;

    fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  function fetchUserData() {
    fetch(`http://localhost:8000/api/user`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + data.access_token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  }

  if (loading) {
    return <DisplayLoading />;
  } else {
    if (user != null) {
      return <DisplayData data={user} />;
    } else {
      return (
        <div>
          <DisplayData data={data} />
          <div style={{ marginTop: 10 }}>
            <button onClick={fetchUserData}>Fetch User</button>
          </div>
        </div>
      );
    }
  }
}

function DisplayLoading() {
  return <div>Loading....</div>;
}

function DisplayData(data) {
  return (
    <div>
      <samp>{JSON.stringify(data, null, 2)}</samp>
    </div>
  );
}

export default GoogleCallback;
