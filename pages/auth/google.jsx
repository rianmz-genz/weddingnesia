"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { urlGoogleCallback } from "@ApiRoutes/auth";

function GoogleCallback() {
  const [loading, setLoading] = useState(true);
  const [resError, setResError] = useState(true);
  let isCalled = false;

  const router = useRouter();
  const path = router.asPath;
  const params = path.substring(12, path.length - 1);

  const apiUrl = urlGoogleCallback + params;

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
        if (jsonData.status) {
          Cookies.set("token", jsonData.data.access_token, { expires: 2 });
        } else {
          setResError(jsonData.message);
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <DisplayLoading />;
  } else {
    if (resError != null) {
      router.push("/auth/login");
    }
    router.push("/dashboard");
  }
}

function DisplayLoading() {
  return <div>Loading....</div>;
}

export default GoogleCallback;
