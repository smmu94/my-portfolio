import { ReactNode } from "react";

type routeType = "/" | "/about" | "/experience" | "/projects";

export type CardProps = {
  label: string;
  children: ReactNode;
  route: routeType;
};
