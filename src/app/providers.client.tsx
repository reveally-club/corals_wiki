"use client";

import { store } from "@/store/store";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import { Provider } from "react-redux";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return <Provider store={store()}>{children}</Provider>;
};

export default Providers;
