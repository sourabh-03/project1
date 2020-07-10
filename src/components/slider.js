import React,{Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cardio from '../static/cardio.jpg';
import yoga from '../static/yoga.jpg';
import cycle from '../static/cycle.jpg';
import treadmill from '../static/treadmill.jpg';
import working  from '../static/working.jpg';
import working1  from '../static/working1.jpg';
import working3 from '../static/working3.jpg'
import squats  from '../static/squats.jpg'

const photos = [
  {
    name:'cardio',
    url:cardio
  },{
    name:'yoga',
    url:yoga
  },{
    name:'cycle',
    url:cycle
  },
  {
    name:'treadmill',
    url:treadmill
  },
  {
    name:'working1',
    url:working1
  },
  {
    name:'working',
    url:working
  },
  {
    name:'working3',
    url:working3
  },
  {
    name:'squat',
    url:squats
  }

];

export default class Slide extends Component {
    render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay :true
    };
    return (
      <div>
      <Slider {...settings}>
        {photos.map((photo) => {
          return(
            <div className="">
              <img width="350"src={photo.url} height="250"/>
            </div>
          )
        }
        )}
      </Slider>
      </div>
    );
  }
}
