import React from "react";

const Recipe = (props) => {
  return (
    <div>
      <div
        className="card m-5 bg-dark text-white p-2"
        style={{ width: "18rem" }}
      >
        <img className="card-img-top" src={props.img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p>{props.mealType}</p>
          <p>{props.calories}</p>
        </div>
        <button
          type="button"
          class="btn btn-outline-light"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
        >
          Open Recipe
        </button>
      </div>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
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
