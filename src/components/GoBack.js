import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <Typography sx={{ mb: 2 }}>
      <Link to="/" style={{ color: "#34c4f2" }}>
        {" "}
        &lt;&lt; Back
      </Link>
    </Typography>
  );
};

export default GoBack;
