// import React, { Component } from "react";
import CONSTANTS from "../constants";
import classes from "../css/tags.css";
// class Tags extends Component {
//   state = {
//     selectedTag: ""
//   };

//   tagClickHandler = tag => {
//     console.log(tag);
//   };
//   renderTags = () => {
//     return CONSTANTS.TAGS.map(tag => {
//       return (
//         <li
//           className={classes.tagItem}
//           key={tag}
//           onClick={e => {
//             this.tagClickHandler(tag);
//           }}
//         >
//           {tag}
//         </li>
//       );
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h3>Tags</h3>
//         <ul className={classes.tagList}>{this.renderTags()}</ul>
//       </div>
//     );
//   }
// }
// export default Tags;
import React from "react";

const Tags = props => {
  const renderTags = () => {
    return CONSTANTS.TAGS.map(tag => {
      return (
        <li
          className={classes.tagItem}
          key={tag}
          onClick={() => {
            props.tagClickHandler(tag);
          }}
        >
          {tag}
        </li>
      );
    });
  };
  return (
    <div>
      <h3>Tags</h3>
      <ul className={classes.tagList}>{renderTags()}</ul>
    </div>
  );
};

export default Tags;
