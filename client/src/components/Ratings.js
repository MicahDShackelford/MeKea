import React from 'react';
import styled from 'styled-components';
import { MdStar } from 'react-icons/md';

const FilledStar = styled(MdStar)`
  color: #FFD200;
  font-size: 1.5em;
`
const Star = styled(MdStar)`
  color: #EEEEEE;
  font-size: 1.5em;
`
const Link = styled.a`
  color: #0058A3;
  text-decoration: none;
  ${Link}:hover {
    text-decoration: underline;
  }
`


let Ratings = (props) => {
  let stars = [];
  if(props.product.name) {
    for(var i = 0; i < 5; i++) {
      if(i < props.product.review.stars) {
        stars.push(<FilledStar/>);
      }else {
        stars.push(<Star/>);
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
      <div className="num-ratings">
        <Link href="#">{props.product.review.reviews}</Link>
      </div>
    </div>
  )
}

export default Ratings;