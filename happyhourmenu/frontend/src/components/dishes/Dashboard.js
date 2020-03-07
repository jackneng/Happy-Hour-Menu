import React, { Fragment } from "react";
import Form from "./Form";
import Dishes from "./Dishes";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Dishes />
    </Fragment>
  );
}
