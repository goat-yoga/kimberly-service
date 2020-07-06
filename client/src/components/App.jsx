import React from 'react';
import Photos from './Photos.jsx';
import Panel from './Panel.jsx';
import DescriptionContainer from './DescriptionContainer.jsx';
import axios from 'axios';
import DemoCarousel from './carousel/Carousel.jsx';

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
      fabrication: [],
      carouselSelected: false,
      startPhoto: 0
    }
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleSelectSize = this.handleSelectSize.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
  }

  componentDidMount() {
    let newProduct = Math.floor(Math.random() * (6100 - 6000)) + 6000;

    axios
    .get(`http://localhost:3005/products/100`)
    .then(({data})=> {
      let allData = data[0];
      let {_id, name, department, description, fit, fabrication, colors, price} = allData;

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


  handleChangeColor(e, x, colorName) {
    this.setState({
      currentColor: this.state.colors[x],
      currentPhotos: this.state.colors[x].images,
      currentSizes: this.state.colors[x].sizes,
      colorNameCurrent: colorName,
      colorSelected: true
    })
  }

  handleSelectSize(e){
    this.setState({
      sizeSelected: true
    })
  }

  toggleCarousel(){
    this.setState({
      carouselSelected: !this.state.carouselSelected
    })
  }

  selectPhoto(e, i){
    this.setState({
      startPhoto: i
    })
    this.toggleCarousel()
  }

  render(){
    {
    return (
       this.state.carouselSelected ?
       <div className="carousel-wrapper" id="overlay">
         <div id="exit" onClick={this.toggleCarousel}><svg viewBox="0 0 14 14" width="24" height="24" fill="#bbbbbb"><path d="M13.6 11.6L9 7l4.6-4.6c.5-.5.5-1.4 0-2-.5-.5-1.4-.5-2 0L7 5 2.4.4C1.9-.1 1-.1.4.4c-.5.5-.5 1.4 0 2L5 7 .4 11.6c-.5.5-.5 1.4 0 2 .5.5 1.4.5 2 0L7 9l4.6 4.6c.5.5 1.4.5 2 0s.5-1.4 0-2z"></path></svg></div>
         <DemoCarousel
         photos={this.state.currentPhotos}
         toggleCarousel={this.toggleCarousel}
         startPhoto={this.state.startPhoto}/>
       </div>
        :
      <main className="main" id="MainContent" role="main">
        <div className="main-container">
          <div className="product-wrapper">
            <div className="product-images">
               <Photos
              photos={this.state.currentPhotos}
              selectPhoto={this.selectPhoto}
              toggleCarousel={this.toggleCarousel}/>
            </div>
            <div className="product-data sticky">
              <Panel
                name={this.state.name}
                price={this.state.price}
                colors={this.state.colors}
                currentColor={this.state.currentColor}
                currentSizes={this.state.currentSizes}
                handleChangeColor={this.handleChangeColor}
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
      </main>
    )
   }
  }
}

export default App;