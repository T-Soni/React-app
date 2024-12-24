// import { MouseEvent } from "react";

import { useState } from "react";

// { items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
}

function ListGroup() {
  let items = [
    "Varanasi",
    "Chennai",
    "Ahmedabad",
    "Jaipur",
    "Bengaluru",
    "Pune",
    "Mumbai",
  ];
  //items = [];

  //   if (items.length == 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );

  //const message = items.length === 0 ? <p>No item found</p> : null;

  //   const getMessage = () => {
  //     items.length === 0 ? <p>No item found</p> : null;
  //   };

  //a hardcoded list
  //   <ul className="list-group">
  //   <li className="list-group-item">An item</li>
  //   <li className="list-group-item">A second item</li>
  //   <li className="list-group-item">A third item</li>
  //   <li className="list-group-item">A fourth item</li>
  //   <li className="list-group-item">And a fifth one</li>
  // </ul>

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event Handler
  //   const handleClick = (event: MouseEvent) => console.log(event);
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* {Message}
      {getMessage()} 
      {items.length === 0 ? <p>No item found</p> : null}*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            // className="list-group-item"
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item, index)}
            //onClick={(event) => console.log(event)}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
