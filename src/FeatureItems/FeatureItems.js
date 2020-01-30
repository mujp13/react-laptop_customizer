import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureItems extends React.Component {
  
  render() {
    console.log(this.props)
    return (
        Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
            <h3>{feature}</h3>
            </legend>
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
                1000 {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
              {this.props.features[feature]}
            </div>
          </fieldset>
        });
      })
    )
  }
}

export default FeatureItems