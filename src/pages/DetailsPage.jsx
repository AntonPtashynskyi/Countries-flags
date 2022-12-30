import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { name } = useParams();

  return <div>DetailsPage {name}</div>;
};

export default DetailsPage;
