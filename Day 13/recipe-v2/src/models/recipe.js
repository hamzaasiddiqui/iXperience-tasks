import React from "react";

const Recipe = (props) => {
  return (
    <div>
      <div
        className="card m-5 text-white text-center p-2"
        style={{ width: "18rem", backgroundColor: "#0F2027" }}
      >
        <img className="card-img-top" src={props.img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <b>{props.mealType}</b>
          <p>{props.cuisineType}</p>
        </div>
        {/* button to trigger popping modal */}
        <button
          type="button"
          class="btn btn-outline-light"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
        >
          Open Recipe
        </button>
      </div>

      {/* div to open the popover model */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div
            class="modal-content text-white text-center border border-3 border-white rounded"
            style={{ backgroundColor: "#0F2027" }}
          >
            {/* modal header section */}
            <div class="modal-header text-center">
              <h5 class="modal-title" id="exampleModalLongTitle">
                {props.title}
              </h5>
              <h6 class="modal-title text-secondary">{props.cuisineType}</h6>
            </div>
            {/* modal body section */}
            <div class="modal-body">
              <h5>Ingredients</h5>
              {props.ingredients.map( ingredient => (
                <li>{ingredient.text}</li>
              ))}
              <hr/>
              <h6>{props.calories.toFixed()} Calories</h6>
            </div>
            {/* modal footer and close button */}
            <div class="modal-footer d-flex justify-content-center">
              {/* <button
                type="button"
                class="btn btn-outline-light"
                data-dismiss="modal"
              >
                Close
              </button> */}
              Click outside card to close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

// export class recipe {
//     constructor(
//       id,
//       name,
//       complete,
//     ) {
//       this.id = id;
//       this.name = name;
//       this.complete = complete;
//     }
//   }
