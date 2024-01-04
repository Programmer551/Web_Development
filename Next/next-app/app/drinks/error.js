"use client";
import React from "react";
import Error from "@/components/error/error";
const ErrorPage = (error) => {
  return <Error error={error} />;
};

export default ErrorPage;
