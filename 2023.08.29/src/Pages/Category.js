import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Category = () => {
  const { name } = useParams();

  return <h1>Category {name}</h1>;
};

export default Category;
