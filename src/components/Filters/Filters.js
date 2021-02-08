import Select from "../Select/Select";
import React from "react";
import "./filters.css";

export default function Filters() {
  const data = ["Sofas", "Tables", "Chaires", "Closets"];
  return (
    <div className="filters">
      <Select title="Living Room" data={data} />
      <Select title="Bedroom" data={data} />
      <Select title="Kitchen" data={data} />
      <Select title="Outdoor" data={data} />
      <Select title="Office" data={data} />
      <Select title="Restaurant" data={data} />
    </div>
  );
}
