import React from "react";

import MenuComponent from "components/Menu/Menu";
import ProductsComponent from "components/Products/Products";
import NewProductComponent from "components/NewProduct/NewProduct";
import "./Content.scss";

const ContentComponent = (props) => {
  const {} = props;

  return (
    <div className="content-component">
      CONTENT COMPONENT WORKS
      <MenuComponent />
      <ProductsComponent />
      <NewProductComponent />
    </div>
  );
};

export default ContentComponent;
