"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function FacebookCallback() {
  const [loading, setLoading] = useState(true);
  let isCalled = false;

  const router = useRouter();
  const path = router.asPath;
  const params = path.substring(14, path.length - 1);

  const apiUrl = `http://localhost:8000/api/auth/callback/facebook${params}`;
  console.log(apiUrl);

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
      .then((jsonData) => {
        setLoading(false);
        Cookies.set("token", jsonData.data.access_token, { expires: 2 });
      });
  }, []);

  if (loading) {
    return <DisplayLoading />;
  } else {
    router.push('/dashboard')
  }
}

function DisplayLoading() {
  return <div>Loading....</div>;
}

export default FacebookCallback;
