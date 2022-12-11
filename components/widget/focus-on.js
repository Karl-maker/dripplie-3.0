import { useState, useRef, useEffect } from "react";
import { Backdrop } from "@mui/material";

import defaults from "./constants";
import useOnClickOutside from "../../hooks/on-click-outside";

/**
 *
 * @author Karl-Johan Bailey
 * @created 11/12/2022
 * @param { JSX } children
 * @param { Boolean } open
 * @param { Function } setOpen
 * @param { JSX } element
 * @desc Handle focus on widget
 *
 */

export default function FocusOn({ children, open, setOpen, element }) {
  const ref = useRef();

  /* Event Handlers */

  // Click outside of enlarged widget

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <>
      {children}
      {/**
       * @desc To focus on media
       */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div ref={ref}>{element}</div>
      </Backdrop>
    </>
  );
}
