import React from "react";
export default ({ input, meta: { touched, error }, children }) => {
  console.log("children>>>", children);
  const renderChildren = () => {
    children.map(child => {
      return child.key;
    });
  };
  return (
    <div>
      <select {...input}>malkeet</select>
    </div>
  );
};
