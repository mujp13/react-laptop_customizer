import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});


class FeatureItems extends React.Component {
  render() {
    const { item, fieldTitle} = this.props;
    const items = Object.values(item);
    
    return (
        <fieldset className="feature" /*key={featureHash}*/>
          <legend className="feature__name">
          <h3>{fieldTitle}</h3>
          </legend>
        {items.map(item => (
          <div key={fieldTitle} className="feature__item">
            <input
              type="radio"
              id={item.name}
              className="feature__option"
              name={fieldTitle}
              /*checked={item.name === this.state.selected[feature].name}*/
              /*onChange={e => this.updateFeature(feature, item)}*/
            />
            <label htmlFor={item.name} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
          ))}
        </fieldset>
    );
  }
}

export default FeatureItems