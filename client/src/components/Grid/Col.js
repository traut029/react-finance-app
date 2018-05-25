import React from "react";

export const Col = ({ size, additionalClass, colId, children }) => (
  <div id={colId} className={size.split(" ").map(size => "col-" + size).join(" ")+ " "+ (additionalClass ? additionalClass : "")}>
    {children}
  </div>
);
