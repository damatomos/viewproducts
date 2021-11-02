import React from "react";
import Product from "../Product/Product";

import './ItemBox.css';

function ItemBox({items}) {
  console.log(items);
  return (
    <div className="ItemBox">
      {
        items && items.map( (item) => {
          return <Product key={item.id} id={item.id} image={item.fotos[0].src} name={item.nome} />
        } )
      }
    </div>
  );
}

export default ItemBox;