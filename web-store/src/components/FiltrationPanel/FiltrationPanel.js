import React from "react";

import { FiltrationPanelConstants } from "common/constants";
import { FiltrationPanelValues } from "common/constants";

import "./FiltrationPanel.scss";

const FiltrationPanelComponent = (props) => {
  const {
    currentCurrency,
    sortingOption,
    handleCurrencyChange,
    handleSortingOption,
  } = props;

  const getActiveButton = (type) => {
    if (type === currentCurrency) {
      return FiltrationPanelValues.ACTIVE_BUTTON;
    }
  };

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
        <div
          className={`usd-currency-button ${getActiveButton(FiltrationPanelConstants.USD)}`}
          onClick={() => handleCurrencyChange(FiltrationPanelConstants.USD)}
        >
          {FiltrationPanelConstants.USD}
        </div>
        <div
          className={`uah-currency-button ${getActiveButton(FiltrationPanelConstants.UAH)}`}
          onClick={() => handleCurrencyChange(FiltrationPanelConstants.UAH)}
        >
          {FiltrationPanelConstants.UAH}
        </div>
      </div>
      <p className="sorting">{FiltrationPanelConstants.SORTING}</p>
      <div className="sorting-option">
        <label className="radio-button">
          <input
            type="radio"
            value={FiltrationPanelValues.LOW_TO_HIGH}
            checked={sortingOption === FiltrationPanelValues.LOW_TO_HIGH}
            onChange={(event) => handleSortingOption(event)}
          />
          <span className="checkmark"></span>
        </label>
        <p>{FiltrationPanelConstants.LOW_TO_HIGH}</p>
      </div>
      <div className="sorting-option">
        <label className="radio-button">
          <input
            type="radio"
            value={FiltrationPanelValues.HIGH_TO_LOW}
            checked={sortingOption === FiltrationPanelValues.HIGH_TO_LOW}
            onChange={(event) => handleSortingOption(event)}
          />
          <span className="checkmark"></span>
        </label>
        <p>{FiltrationPanelConstants.HIGH_TO_LOW}</p>
      </div>
      <div className="sorting-option">
        <label className="radio-button">
          <input
            type="radio"
            value={FiltrationPanelValues.ALPHABET}
            checked={sortingOption === FiltrationPanelValues.ALPHABET}
            onChange={(event) => handleSortingOption(event)}
          />
          <span className="checkmark"></span>
        </label>
        <p>{FiltrationPanelConstants.ALPHABET}</p>
      </div>
    </div>
  );
};

export default FiltrationPanelComponent;
