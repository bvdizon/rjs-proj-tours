import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  // Props for receiving tours data and removeTour function

  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {/* Map over the tours array and render individual Tour components */}
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
