import React from 'react';
import FeatureItems from '../FeatureItems/FeatureItems'
import './FeatureContainer.css';

class FeatureContainer extends React.Component {
 
  render() {
    const { itemOptions } = this.props;
    const fieldTitles = Object.keys(itemOptions);

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {itemOptions &&
          Object.values(itemOptions).map((item, index) => (
            <FeatureItems
              key={itemOptions.name}
              fieldTitle={fieldTitles[index]}
              item={item}
              selectedOption={this.props.selectedOptions[fieldTitles[index]]}
              updateFeature={this.props.updateFeature}
            />
          ))}
      </form>
    )
  }
}

export default FeatureContainer