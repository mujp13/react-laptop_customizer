import React from 'react';
import FeatureItems from '../FeatureItems/FeatureItems'

class FeatureContainer extends React.Component {
 

  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FeatureItems features={this.props} />
      </form>
    )
  }
}

export default FeatureContainer