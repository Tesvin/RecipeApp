import React, { useState } from "react";

const Galleryitem = (props) => {
  let [view, setView] = useState(false);

  const defaultView = () => {
    return (
      <div>
        <div className="p-8 max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={props.item.image}
            alt="recipe"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.item.name}</div>
            <h2>Prep Time: {props.item.dataPoints[6].value}</h2>
            <h2>Calories: {props.item.dataPoints[1].value}</h2>
            <a href={props.item.link} target="_blank" className="text-blue-600/100">
              <h1>CLICK HERE FOR RECIPE</h1>
            </a>
          </div>
        </div>
      </div>
      // <div className="">
      //   <div >
      //     <img
      //       src={props.item.image}
      //       alt="recipeImage"
      //     />
      //     <h1>{props.item.name}</h1>
      //     <h2>Prep Time: {props.item.dataPoints[6].value}</h2>
      //     <h2>Calories: {props.item.dataPoints[1].value}</h2>
      //     <a href={props.item.link} target="blank">
      //       <h1>click here</h1>
      //     </a>
      //   </div>
      // </div>
    );
  };

  return (
    <div onClick={() => setView(!view)} style={{ display: "inline-block" }}>
      {defaultView()}
    </div>
  );
};

export default Galleryitem;
