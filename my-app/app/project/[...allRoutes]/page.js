import React from "react";

const ProjectRoutes = ({ params }) => {
  return (
    <div>
      All Routes: <br />
      {params.allRoutes.map((val) => (
        <li>{val}</li>
      ))}
    </div>
  );
};

export default ProjectRoutes;
