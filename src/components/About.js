import React from "react";

function About({ image="https://via.placeholder.com/215Links to an external site.", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}
// Compare this snippet from src/components/App.js:
export default About;