import React, { Component } from 'react';

interface ScrollerState {
    randomNonsense: any;
}

interface ScrollerProps {
}
class Scroller extends Component<ScrollerProps, ScrollerState> {
    constructor(props: any) {
        super(props)
        this.state = {
            randomNonsense: Math.random()
        }
        this.scrollHandler = this.scrollHandler;
        this.prevScroll = this.prevScroll;      
    }

    scrollHandler = false;
    prevScroll = 0;      


    handleScroll = (e:any) => {
        e.persist();
    
        if (this.scrollHandler === false) {
          this.scrollHandler = true;
          this.prevScroll = e.target.scrollTop;
          
            if ( (e.target.scrollTop >= this.prevScroll) && e.target.scrollTop !== 0) {
              this.setState({randomNonsense: `Going down the stack: ${Math.random()}` })} 
              else {
                this.setState({randomNonsense: `Going up the stack: ${Math.random()}` })} 
                e.target.scrollTop = 1;
            setTimeout( 
              ()=> { this.scrollHandler = false; }, 1000 );
      } else {
        e.target.scrollTop = 1;
       }
      }

    render() {
        return(
                <div className="Scroller__example"                             
                     onScroll={ (e:any) => { this.handleScroll(e) } } 
                >
                    <div className="Scroller__content">Scroll me! <br/> <br/> {this.state.randomNonsense}</div>
                </div>
        )
    }
}

export default Scroller;