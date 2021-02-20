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
      isChanged: false,
      currentCurrency: FiltrationPanelConstants.UAH,
    };
  }

  componentDidMount() {
    const {listOfFiltredProducts} = this.state;

    this.handleDefaultPriceLimits(listOfFiltredProducts)
  }

  handlePriceLimits(event) {
    this.setState({
      [event.target.name]: parseFloat(event.target.value),
    }, () => {
      this.handleSorting();
    });
  }

  handleCurrencyChange(currency) {
    this.setState({
      currentCurrency: currency,
      isChanged: true
    }, () => {
      this.handleSorting(currency);
    });
  }

  handleSortingOption(event) {
    this.setState({
      sortingOption: event.target.value,
    }, () => {
      this.handleSorting();
    });
  }

  filterByOrder(filtredProducts) {
    const { sortingOption } = this.state;

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
        default:
          return filtredProducts;
      }
    });
    return filtredProducts;
  }

  handleNewPrice(filtredProducts, currency) {
    const { currentCurrency } = this.state;

    if (currentCurrency === FiltrationPanelConstants.USD) {
      filtredProducts = filtredProducts.map((product) => {
        let result = {
          ...product,
          price: parseFloat((product.price * FiltrationPanelValues.USD_CURRENCY).toFixed(2))
        };
        return result;
      })
    }
    return filtredProducts;
  }

  filterByPrice(filtredProducts) {
    const { lowerPriceLimit, upperPriceLimit } = this.state;

    const result = filtredProducts.filter((product) => {
      if (parseFloat(product.price) >= lowerPriceLimit && parseFloat(product.price) <= upperPriceLimit) {
        return product;
      }
    })
    return result;
  }

  handleSorting(currency) {
    const { listOfProducts, isChanged } = this.state;

    let filtredProducts = [...listOfProducts];

    filtredProducts = this.handleNewPrice(filtredProducts, currency);

    if (isChanged === true) {
      this.handleDefaultPriceLimits(filtredProducts)
    } else {
      filtredProducts = this.filterByPrice(filtredProducts);
    }

    filtredProducts = this.filterByOrder(filtredProducts);

    this.setState({
      listOfFiltredProducts: filtredProducts,
    });
  }

  handleDefaultPriceLimits(filtredProducts) {
    const min = filtredProducts.reduce((acc, curr) => {
      return parseFloat(acc.price) < parseFloat(curr.price) ? acc : curr;
    });
    const max = filtredProducts.reduce((acc, curr) => {
      return parseFloat(acc.price) > parseFloat(curr.price) ? acc : curr;
    });

    this.setState({
      lowerPriceLimit: min.price,
      upperPriceLimit: max.price,
      isChanged: false
    }, () => {
      this.filterByPrice(filtredProducts)
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
