import React from "react";

import ContentComponent from "components/Content/Content";

import { FiltrationPanelConstants, FiltrationPanelValues } from "common/constants";

import productsJSON from "common/products.json";

class ContentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      listOfProducts: productsJSON.products,
      listOfFiltredProducts: productsJSON.products,
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
    const { listOfFiltredProducts } = this.state;

    const min = listOfFiltredProducts.reduce((acc, curr) => {
      return parseFloat(acc.price) < parseFloat(curr.price) ? acc : curr;
    });
    const max = listOfFiltredProducts.reduce((acc, curr) => {
      return parseFloat(acc.price) > parseFloat(curr.price) ? acc : curr;
    });

    this.setState({
      lowerPriceLimit: min.price,
      upperPriceLimit: max.price,
    });
  }

  handlePriceLimits(event) {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      this.handleSorting();
    });
  }

  handleCurrencyChange(currency) {
    this.setState({
      currentCurrency: currency,
    }, () => {
      this.handleSorting();
    });
  }

  handleSortingOption(event) {
    this.setState({
      sortingOption: event.target.value,
    }, () => {
      this.handleSorting();
    });
  }

  handleSorting() {
    const { listOfProducts, lowerPriceLimit, upperPriceLimit, sortingOption, currentCurrency } = this.state;

    let filtredProducts = [...listOfProducts];

    filtredProducts.sort((first, second) => {
      switch (sortingOption) {
        case FiltrationPanelValues.ALPHABET:
          if (first.name.toLowerCase() < second.name.toLowerCase()) return -1;
          if (first.name.toLowerCase() > second.name.toLowerCase()) return 1;
          return 0;
        case FiltrationPanelValues.LOW_TO_HIGH:
          if (first.price < second.price) return -1;
          if (first.price > second.price) return 1;
          return 0;
        case FiltrationPanelValues.HIGH_TO_LOW:
          if (first.price > second.price) return -1;
          if (first.price < second.price) return 1;
          return 0;
      }
    });

    filtredProducts = filtredProducts.filter((product) => {
      if (product.price >= lowerPriceLimit && product.price <= upperPriceLimit) {
        return product;
      }
    });

    if (currentCurrency === 'USD') {
      filtredProducts = filtredProducts.map((product) => {
        let result = { ...product, price: (product.price * 0.036).toFixed(2) };
        return result;
      })
    }

    this.setState({
      listOfFiltredProducts: filtredProducts,
    });
  }

  render() {
    const {
      listOfFiltredProducts,
      lowerPriceLimit,
      upperPriceLimit,
      currentCurrency,
      sortingOption } = this.state;

    return (
      <div>
        <ContentComponent
          filtredProducts={listOfFiltredProducts}
          lowerPriceLimit={lowerPriceLimit}
          upperPriceLimit={upperPriceLimit}
          currentCurrency={currentCurrency}
          sortingOption={sortingOption}
          handleCurrencyChange={(currency) => this.handleCurrencyChange(currency)}
          handlePriceLimits={(event) => this.handlePriceLimits(event)}
          handleSortingOption={(event) => this.handleSortingOption(event)}
        />
      </div>
    );
  }
}

export default ContentContainer;
