import React, { useState } from "react";
import {
  AzureMap,
  AzureMapsProvider,
  IAzureMapOptions,
} from "react-azure-maps";
import { AuthenticationType } from "azure-maps-control";

function HomePage() {
  const { option } = {
    authOptions: {
      authType: "subscriptionKey",
      subscriptionKey: "nYNdZjd4WOQB1Np5qNZawSFjGpcJkJYy2qE-pEetgWg", // Your subscription key
    },
  };

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <AzureMapsProvider>
        <div style={{ height: "300px" }}>
          <AzureMap options={option} />
        </div>
      </AzureMapsProvider>
    </div>
  );
}

export default HomePage;
