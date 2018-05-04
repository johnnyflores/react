import React, { Component } from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Carousel } from 'react-responsive-carousel';

// Data
import items from '../../data/slider';

class Slider extends Component {
    render() {
      return (
        <div className="Slider">
            <MuiThemeProvider>
                <Carousel showArrows={true} showThumbs={false} showStatus={false}>
                {
                    items && items.map(
                    (item, key) => 
                        <div key={key}>
                            <img src={item.image}/>
                            <p className="legend">{item.title}</p>
                        </div>
                    )
                }               
                </Carousel>
            </MuiThemeProvider>
        </div>
      );
    }
  }
  
  export default Slider;