import React from "react";
export function Person({ data }) {
  // console.log(data);
  const { name, nickName, images } = data;
  return (
    <div>
      {data.map((element) => {
        return (
          <div style={{ border: "2px solid red" }}>
            <h1>Name:{element.name}</h1>
            <h1>Nickname: {element.nickName || "No Nickname"}</h1>
            <img
              src={element.images && element.images[0].small.url}
              style={{ width: "50px" }}
            />
          </div>
        );
      })}
    </div>
  );
}
