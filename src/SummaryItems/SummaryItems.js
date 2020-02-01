import React from 'react';
import './SummaryItems.css';

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class SummaryItems extends React.Component {
  render() {
    const {fieldTitle} = this.props;
    return (
      <div className="summary__option" /*key={featureHash}*/>
        <div className="summary__option__label">{fieldTitle}</div>
        <div className="summary__option__value">{this.props.item.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(this.props.item.cost)}
        </div>
      </div>
    )
  }
}

export default SummaryItems