import React from "react";
//import slugify from 'slugify';
import './App.css';
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
        1: { name: "17th Generation Intel Core HB (7 Core with donut spare)", cost: 700 },
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
      "Video Card": { name: "Nvidia GTX1080", cost: 1150.98 },
      Display: {
        name: '15.6" UHD (3840 x 2160)',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    console.log(feature)
    console.log(newValue)
    // Toggle between laptop parts
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeatureContainer 
            itemOptions={this.state.itemOptions}
            selectedOptions={this.state.selected}
            updateFeature={this.updateFeature}
          />
          <SummaryContainer 
            selectedOptions={this.state.selected}
            updateFeature={this.updateFeature}
          />
        </main>
      </div>
    );
  }
}

export default App;
