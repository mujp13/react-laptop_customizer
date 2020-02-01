import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});



class SummaryItems extends React.Component {
  render() {
    return (
      <div className="summary__option" /*key={featureHash}*/>
        <div className="summary__option__label">1</div>
        <div className="summary__option__value">2</div>
        <div className="summary__option__cost">
          3
        </div>
      </div>
    )
  }
}

export default SummaryItems