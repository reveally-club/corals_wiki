"use client";

import React, { FC } from "react";

interface ClientPageProps {
  params: { id: string };
}

const ClientPage: FC<ClientPageProps> = ({ params }) => {
  const id = params.id;
  return <>{id}</>;
};

export default ClientPage;
