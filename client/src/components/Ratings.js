import React from 'react';
import { GoStar } from 'react-icons/go';

const style = {
  star : {
    color: 'grey'
  },
  star_filled : {
    color: 'yellow'
  }
}

let Ratings = (props) => {
  let stars = [];
  if(props.product.name) {
    for(var i = 0; i < 5; i++) {
      if(i < props.product.review.stars) {
        stars.push(<GoStar style={style.star_filled}/>);
      }else {
        stars.push(<GoStar style={style.star}/>);
      }
    }
    console.log(stars);
  }
  return (
    <div id="ratings">
      <div className="star-ratings">
        {stars.map((star, i) => (
          <span key={`star-${i}`}>{star}</span>
        ))}
      </div>
      <div className="num-ratings"><a href="#">{props.product.review.reviews}</a></div>
    </div>
  )
}

export default Ratings;