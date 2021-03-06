import React from 'react';
import SummaryItems from '../SummaryItems/SummaryItems'
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import './SummaryContainer.css';

class SummaryContainer extends React.Component {
  render() {
    const { selectedOptions } = this.props;
    const fieldTitles = Object.keys(selectedOptions);

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {selectedOptions &&
          Object.values(selectedOptions).map((item, index) => ( 
          <SummaryItems 
            key={selectedOptions.name}
            fieldTitle={fieldTitles[index]}
            item={item}
            selectedOptions={this.props.selectedOptions}
          />
        ))}
          <SummaryTotal 
            selected={this.props.selectedOptions}
          />
      </section>
    )
  }
}

export default SummaryContainer