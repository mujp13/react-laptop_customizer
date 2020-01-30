import React from 'react';
import SummaryItems from '../SummaryItems/SummaryItems'

class SummaryContainer extends React.Component {
  render() {
    return (
      <section className="main__summary">
      <h2>Your cart</h2>
      <SummaryItems />
      </section>
    )
  }
}

export default SummaryContainer