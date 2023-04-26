import Spinner from "@ui/components/Spinner";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-16 space-y-6 bg-gray-200">
      <h1 className="mx-auto">Spinners</h1>

      <h2 className="mx-auto">Colors:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Spinner color="primary"></Spinner>
        <Spinner color="secondary"></Spinner>
        <Spinner color="success"></Spinner>
        <Spinner color="info"></Spinner>
        <Spinner color="warning"></Spinner>
        <Spinner color="error"></Spinner>
        <Spinner color="dark"></Spinner>
        <Spinner color="white"></Spinner>
      </div>

      <h2 className="mx-auto">Sizes:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Spinner color="primary" size="xs"></Spinner>
        <Spinner color="primary" size="sm"></Spinner>
        <Spinner color="primary"></Spinner>
        <Spinner color="primary" size="lg"></Spinner>
        <Spinner color="primary" size="xl"></Spinner>
      </div>
    </div>
  );
}
