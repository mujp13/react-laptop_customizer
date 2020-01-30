import React from 'react';
//import slugify from 'slugify';
//import './App.css';
import FeatureContainer from './FeatureContainer/FeatureContainer'
import SummaryContainer from './SummaryContainer/SummaryContainer'


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


class App extends React.Component {
  
  state = {
    selected: {
      Processor: { name: '17th Generation Intel Core HB (7 Core with donut spare)', cost: 700 },
      'Operating System': { name: 'Ubuntu Linux 16.04', cost: 200 },
      'Video Card': { name: 'Toyota Corolla 1.5v', cost: 1150.98 },
      Display: { name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs', cost: 1500}
    }
  };

  updateFeature = (feature, newValue) => {
    // Toggle between laptop parts
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };


  render() {
    const total = Object.keys(this.state.selected).reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeatureContainer />
          <SummaryContainer />
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">{USCurrencyFormat.format(total)}</div>
          </div>
        </main>
      </div>
    )
  }
}

export default App