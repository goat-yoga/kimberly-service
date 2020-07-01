import React from 'react';
import Photos from './Photos.jsx';
import Panel from './Panel.jsx';
import DescriptionContainer from './DescriptionContainer.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: [
        {
          paragraph: '',
          bullets: []
        }
      ],
      colors: [],
      department: '',
      name: '',
      price: '',
      currentPhotos: [],
      currentColor: {},
      currentSizes: [],
      colorNameCurrent: '',
      sizeSelected: false,
      colorSelected: false,
      fit: [],
      fabrication: []
    }
    this.handleChangePhotos = this.handleChangePhotos.bind(this);
    this.handleSelectSize = this.handleSelectSize.bind(this);
  }

  componentDidMount() {

    axios
    .get('/products/5efcb884a2775f013b4858e9')
    .then(({data})=> {

      let {_id, name, department, description, fit, fabrication, colors, price} = data;

      this.setState({
        description: description,
        colors: colors,
        department: department,
        name: name,
        price: price,
        currentPhotos: colors[0].images,
        currentColor: colors[0],
        currentSizes: colors[0].sizes,
        colorNameCurrent: colors[0].colorName,
        fit: fit,
        fabrication: fabrication
      })
    })
    .catch((err)=> {
      console.error(err)
    })
  }

  handleChangePhotos(e, x, colorName) {
    this.setState({
      currentColor: this.state.colors[x],
      currentPhotos: this.state.colors[x].images,
      currentSizes: this.state.colors[x].sizes,
      colorNameCurrent: colorName,
      colorSelected: true,
    })
  }

  handleSelectSize(e){
    this.setState({
      sizeSelected: true
    })
  }

  render(){
    return (
      <div className="main-container">
        <div className="product-wrapper">
          <div className="product-images">
            <Photos photos={this.state.currentPhotos}/>
          </div>
          <div className="product-data sticky">
            <Panel
            name={this.state.name}
            price={this.state.price}
            colors={this.state.colors}
            currentColor={this.state.currentColor}
            currentSizes={this.state.currentSizes}
            handleChangePhotos={this.handleChangePhotos}
            colorNameCurrent={this.state.colorNameCurrent}
            handleSelectSize={this.handleSelectSize}
            sizeSelected={this.state.sizeSelected}/>
          </div>
        </div>
           <DescriptionContainer
           desc={this.state.description}
           fit={this.state.fit}
           fabrication={this.state.fabrication}/>
      </div>
    )
  }
}

export default App;