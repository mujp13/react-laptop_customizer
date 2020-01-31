import React from 'react';



class SummaryItems extends React.Component {
  render() {
    return (
      <div className="summary__option" /*key={featureHash}*/>
        <div className="summary__option__label">Title </div>
        <div className="summary__option__value">Item</div>
        <div className="summary__option__cost">
          $5000
        </div>
      </div>
    )
  }
}

export default SummaryItems