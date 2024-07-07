
import React, { Component } from 'react';
import './ContentRating.css';

export class ContentRating extends Component {
  constructor() {
    super();
    /*Initialize the states for the likes and dislikes, these are 0 for the initial state, also stablish te function to increment the number when button is clicked*/
    this.state = {
      likes: 0,
      dislikes: 0,

      handlelike:() => {
        this.setstate((prevstate) => ({
          likes: prevstate.likes +1
        }));
      },
      handledislike:() => {
        this.setstate((prevstate) => ({
          dislikes: prevstate.dislikes + 1
        }));
      }
    };
  }
  render() {
    return (
     <div className='content-rating'>
        <p>
           I am learning how to use state and arrow functions, this case for buildin reacting buttons for like and dislike,help me to try them please!!
        </p>
        <div className='rating-buttons'>

          <button className='like-button' onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>

          <button className='dislike-button' onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>

        </div>
      </div>
    );
  }
}

export default ContentRating;
