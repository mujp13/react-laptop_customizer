import React from 'react';


class FeatureItems extends React.Component {
  
  render() {
    return (
        <fieldset className="feature" /*key={featureHash}*/>
          <legend className="feature__name">
          <h3>A</h3>
          </legend>
          <div /*key={itemHash}*/ className="feature__item">
            <input
              type="radio"
              /*id={itemHash}*/
              className="feature__option"
              /*name={slugify(feature)}*/
              /*checked={item.name === this.state.selected[feature].name}*/
              /*onChange={e => this.updateFeature(feature, item)}*/
            />
            <label /*htmlFor={itemHash}*/ className="feature__label">
              1000 {/*item.name*/} ({/*USCurrencyFormat.format(item.cost)*/})
            </label>
          </div>
        </fieldset>
    )
  }
}

export default FeatureItems