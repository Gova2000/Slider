// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Item from '../PlanetItem'

import './index.css'

class PlanetSlider extends Component {
  render() {
    
    const {planetsList} = this.props
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div className="main">
        <Slider {...settings}>
          <div>
            <Item list={planetsList[0]} key={planetsList[0].id} />
          </div>
          <div>
            <Item list={planetsList[1]} key={planetsList[1].id} />
          </div>
        </Slider>
      </div>
    )
  }
}

export default PlanetSlider
