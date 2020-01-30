import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const features = Object.keys(this.props.features).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
  const options = this.props.features[feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.state.selected[feature].name}
          onChange={e => this.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    });
  });

class FeatureItems extends React.Component {
  
  render() {
    console.log(this.props)
     return (
        <fieldset className="feature" /*key={featureHash}*/>
          <legend className="feature__name">
          <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
    )
  }
}

export default FeatureItems