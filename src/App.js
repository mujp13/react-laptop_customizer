import React from "react";
//import slugify from 'slugify';
//import './App.css';
import FeatureContainer from "./FeatureContainer/FeatureContainer";
import SummaryContainer from "./SummaryContainer/SummaryContainer";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class App extends React.Component {
  state = {
    itemOptions: {
      Processor: {
        1: { name: "17th Generation Intel Core HB", cost: 700 },
        2: { name: "Professor X AMD Fire Breather", cost: 1200 }
      },
      "Operating System": {
        1: { name: "Ubuntu Linux 16.04", cost: 200 },
        2: { name: "Bodhi Linux", cost: 300 }
      },
      "Video Card": {
        1: { name: "Nvidia GTX1080", cost: 1150 },
        2: { name: "AMD ", cost: 1345 }
      },
      Display: {
        1: { name: '15.6" UHD (3840 x 2160)', cost: 1500 },
        2: { name: '15.3" HGTV (3840 x 2160)', cost: 1400 }
      }
    },
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700
      },
      "Operating System": { name: "Ubuntu Linux 16.04", cost: 200 },
      "Video Card": { name: "Toyota Corolla 1.5v", cost: 1150.98 },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
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
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeatureContainer 
            itemOptions={this.state.itemOptions}
            filterOption={this.state.updateFeature}
          />
          <SummaryContainer 
            updateFeature={this.updateFeature}
          />
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
