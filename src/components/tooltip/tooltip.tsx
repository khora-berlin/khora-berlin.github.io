import * as React from 'react';
import { Tooltip as Tippy } from "react-tippy";
import "react-tippy/dist/tippy.css";

interface Props {
    children:React.ReactNode,
    html: React.ReactElement
}

export default function Tooltip({ children, html }:Props) {
  return (
    <Tippy trigger="mouseenter" position="top" size="small" arrow html={html}>
      {children}
    </Tippy>
  );
}