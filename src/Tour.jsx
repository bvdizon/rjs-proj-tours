import { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false); // State to manage whether to show full or truncated information

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          &nbsp;
          <button
            className='info-btn'
            type='button'
            onClick={() => setReadMore(!readMore)}>
            {readMore ? ' — show less' : ' — read more'}
          </button>
        </p>
        <button
          type='button'
          className='btn btn-block delete-btn'
          onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
