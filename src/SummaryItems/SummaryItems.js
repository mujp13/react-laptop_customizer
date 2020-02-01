import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class SummaryItems extends React.Component {
  render() {
    const { item, fieldTitle} = this.props;
    const items = Object.values(item);
    return (
      <>
      {items.map(item => (
        <div className="summary__option" /*key={featureHash}*/>
          <div className="summary__option__label">{fieldTitle}</div>
          <div className="summary__option__value">{this.props.item.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(this.props.item.cost)}
          </div>
        </div>
      ))}
      </>
    )
  }
}

export default SummaryItems