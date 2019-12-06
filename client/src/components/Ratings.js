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
const ReviewContainer = styled.div`
  display: flex;
  flex-direction = row;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0.25em;
  }
  div:first-child {
    margin-left: 0;
  }
  div:last-child {
    margin-right: 0;
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
  }
  return (
    <ReviewContainer id="ratings">
      <div className="star-ratings">
        {stars.map((star, i) => (
          <span key={`star-${i}`}>{star}</span>
        ))}
      </div>
        <p>{props.product.review.stars}.0</p>
      <div className="num-ratings">
        <Link href="#">{props.product.review.reviews} Reviews</Link>
      </div>
    </ReviewContainer>
  )
}

export default Ratings;