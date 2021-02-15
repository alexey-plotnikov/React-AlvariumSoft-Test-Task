import React from "react";
import Radio from "@material-ui/core/Radio";

import { FiltrationPanelConstants } from "common/constants";

import "./FiltrationPanel.scss";

const FiltrationPanelComponent = (props) => {
  const {} = props;

  return (
    <div className="filtration-panel-component">
      <p className="price">{FiltrationPanelConstants.PRICE}</p>
      <div className="range-to-sort">
        <div className="range-from">
          <p>{FiltrationPanelConstants.FROM}</p>
          <input type="number" min="0" />
        </div>
        <div className="range-to">
          <p>{FiltrationPanelConstants.TO}</p>
          <input type="number" min="0" />
        </div>
      </div>
      <p className="currency">{FiltrationPanelConstants.CURRENCY}</p>
      <div className="currency-buttons">
        <div className="usd-button">{FiltrationPanelConstants.USD}</div>
        <div className="uah-button">{FiltrationPanelConstants.UAH}</div>
      </div>
      <p className="sorting">{FiltrationPanelConstants.SORTING}</p>
      <div className="sort-radio-button">
        <Radio value="b" name="radio-button-demo" />
        <p>{FiltrationPanelConstants.LOW_TO_HIGH}</p>
      </div>
      <div className="sort-radio-button">
        <Radio value="b" name="radio-button-demo" />
        <p>{FiltrationPanelConstants.HIGH_TO_LOW}</p>
      </div>
      <div className="sort-radio-button">
        <Radio value="b" name="radio-button-demo" />
        <p>{FiltrationPanelConstants.ALPHABET}</p>
      </div>
    </div>
  );
};

export default FiltrationPanelComponent;
