import React, { Component } from 'react';

import SelectsCard from './SelectsCard';

class Selects extends Component {


  //CORS  is not  enabeled thats why using hardcoded values
  high = [{
    "title": "Surfing",
    "description": "Best Hawaiian islands for surfing.",
    "image": "https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png"
  }, {
    "title": "Traditional Festivals",
    "description": "Best places to attend traditional festivals in Hawaii",
    "image": "https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals_low.png"
  }, {
    "title": "Volcanoes",
    "description": "Volcanic conditions can change at any time.",
    "image": "https://storage.googleapis.com/topics-images/web-dev-images/volcanoes_low.png"
  }]
  constructor() {
    super();
    this.state = {
      high: this.high,
      loading: false
    }
  }
  render() {
    return (
      <div className='max-w-[1000px] max-h-max mx-auto pb-16'>
        <p className='font-ibm pt-16  pb-1 font-bold '>Highlights</p>
        <div className='max-w-[1000px]  grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {this.state.high.map((element) => {
            return <SelectsCard key={element.image} bg={element.image} text={element.title} description={element.description} />

          })}
        </div>
      </div>
    )
  }
}

export default Selects