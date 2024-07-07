
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,

      handlelike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes +1
        }));
      },
      handledislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));
      }
    };
  }
  render() {
    return (
      <>
     <div className='content-rating'>
        <h2>
           I am learning how to use state and arrow functions, this case for building reacting buttons for like and dislike,help me to try them please!!
        </h2>
        <div className='rating-buttons'>

          <button className="like-button" onClick={this.handleLike}>
            Like ({this.state.likes})
          </button>

          <button className="dislike-button" onClick={this.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>

        </div>
      </div>
      </>
    );
  }
}

export default ContentRating;
