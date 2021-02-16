import React from "react";

import ContentComponent from "components/Content/Content";
import {
  FiltrationPanelConstants,
  FiltrationPanelValues,
} from "common/constants";

class ContentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      sortingOption: FiltrationPanelValues.ALPHABET,
      lowerPriceLimit: "",
      upperPriceLimit: "",
      activeButton: FiltrationPanelConstants.UAH,
    };
  }

  handleSortingOption(event) {
    this.setState({
      sortingOption: event.target.value,
    });
  }

  handleCurrencyChange(currency) {

  }

  render() {
    const { activeButton, sortingOption } = this.state;

    return (
      <div>
        <ContentComponent
          activeButton={activeButton}
          sortingOption={sortingOption}
          handleSortingOption={(currency) => this.handleCurrencyChange(currency)}
          handleSortingOption={(event) => this.handleSortingOption(event)}
        />
      </div>
    );
  }
}

export default ContentContainer;
