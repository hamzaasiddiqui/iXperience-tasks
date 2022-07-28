import React from "react";

import Spinner from "./Spinner";

export default function Button({
  variant = "light",
  onClick,
  className,
  type,
  loading = false,
  disabled = false,
  children,
}) {
  return (
    <button
      className={"btn btn-outline-" + variant + " " + className}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="button-spinner">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
