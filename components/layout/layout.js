import React, { Fragment } from "react";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Layout({ children }) {
  return (
    <Fragment>
      {children}
      <ToastContainer
        position={toast.POSITION.BOTTOM_CENTER}
        autoClose={2000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </Fragment>
  );
}

export default Layout;
