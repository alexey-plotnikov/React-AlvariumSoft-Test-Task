import React from "react";

import ContentComponent from "components/Content/Content";
import {
  FiltrationPanelConstants,
  FiltrationPanelValues,
} from "common/constants";

import Products from "common/products.json";

class ContentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      products: Products.products,
      filtredProducts: Products.products,
      sortingOption: "",
      lowerPriceLimit: "",
      upperPriceLimit: "",
      currentCurrency: FiltrationPanelConstants.UAH,
    };
  }

  componentDidMount() {
    this.handleDefaultPriceLimits();
  }

  handleDefaultPriceLimits() {
    const { filtredProducts } = this.state;

    const min = filtredProducts.reduce((acc, curr) => {
      return acc.price < curr.price ? acc : curr;
    });

    const max = filtredProducts.reduce((acc, curr) => {
      return acc.price > curr.price ? acc : curr;
    });

    this.setState({
      lowerPriceLimit: min.price,
      upperPriceLimit: max.price,
    });
  }

  handlePriceLimits(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.handleSorting();
      }
    );
  }

  handleSortingOption(event) {
    this.setState({
      sortingOption: event.target.value
    },
      () => {
        this.handleSorting(event.target.value);
      }
    );
  }

  handleSorting(sortingOption) {
    const { products, lowerPriceLimit, upperPriceLimit } = this.state;

    let filtredProducts = [];

    if (sortingOption === FiltrationPanelValues.ALPHABET) {
      filtredProducts = products.sort((first, second) => {
        if (first.name.toLowerCase() < second.name.toLowerCase()) return -1;
        if (first.name.toLowerCase() > second.name.toLowerCase()) return 1;
        return 0;
      });
    } else if (sortingOption === FiltrationPanelValues.LOW_TO_HIGH) {
      filtredProducts = products.sort((first, second) => {
        if (first.price < second.price) return -1;
        if (first.price > second.price) return 1;
        return 0;
      });
    } else if (sortingOption === FiltrationPanelValues.HIGH_TO_LOW) {
      filtredProducts = products.sort((first, second) => {
        if (first.price > second.price) return -1;
        if (first.price < second.price) return 1;
        return 0;
      });
    }

    filtredProducts = products.filter((product) => {
      if (product.price >= lowerPriceLimit 
        && product.price <= upperPriceLimit) {
        return product;
      }
    });

    this.setState({
      filtredProducts: filtredProducts,
    });
  }

  handleCurrencyChange(currency) {
    this.setState({
      currentCurrency: currency,
    });
  }

  render() {
    const {
      filtredProducts,
      lowerPriceLimit,
      upperPriceLimit,
      currentCurrency,
      sortingOption,
    } = this.state;

    return (
      <div>
        <ContentComponent
          products={filtredProducts}
          lowerPriceLimit={lowerPriceLimit}
          upperPriceLimit={upperPriceLimit}
          currentCurrency={currentCurrency}
          sortingOption={sortingOption}
          handleCurrencyChange={(currency) =>
            this.handleCurrencyChange(currency)
          }
          handlePriceLimits={(event) => this.handlePriceLimits(event)}
          handleSortingOption={(event) => this.handleSortingOption(event)}
        />
      </div>
    );
  }
}

export default ContentContainer;
