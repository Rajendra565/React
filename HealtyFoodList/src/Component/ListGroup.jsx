import React from "react";
import ListItems from "./ListItems";
function ListGroup({items}) {
  return (
    <div className=" w-100 d-flex justify-content-center align-items-center">
      <ul className="list-group w-75 ">
        <ListItems liItems={items}></ListItems>
        </ul>
    </div>
    )
  
}

export default ListGroup;
