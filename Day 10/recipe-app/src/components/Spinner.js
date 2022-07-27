import React from "react";

export default function spinner({
    variant = 'light'

}) {
  return (
    <div className={"spinner-border spinner-border-sm text-"+ variant} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
