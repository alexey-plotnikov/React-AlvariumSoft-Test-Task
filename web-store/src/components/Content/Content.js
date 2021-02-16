import React from "react";

import FiltrationPanelComponent from "components/FiltrationPanel/FiltrationPanel";
import ProductsComponent from "components/Products/Products";
import NewProductComponent from "components/NewProduct/NewProduct";
import "./Content.scss";

const ContentComponent = (props) => {
  const { activeButton, sortingOption, handleSortingOption } = props;

  return (
    <div className="content-component">
      <div className="filtred-products">
        <FiltrationPanelComponent
          activeButton={activeButton}
          sortingOption={sortingOption}
          handleSortingOption={(event) => handleSortingOption(event)}
        />
        <ProductsComponent />
      </div>
      <div>
        <NewProductComponent />
      </div>
    </div>
  );
};

export default ContentComponent;
