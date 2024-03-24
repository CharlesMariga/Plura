import React from "react";

function page({ params }: { params: { agencyId: string } }) {
  return <div>{params.agencyId}</div>;
}

export default page;
