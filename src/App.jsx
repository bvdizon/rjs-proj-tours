import { useState, useEffect } from 'react';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://www.course-api.com/react-tours-project'; // API endpoint for fetching tours

function App() {
  // State variables for managing loading state and tours data
  const [isLoading, setIsLoading] = useState(true); // Initially set loading to true
  const [tours, setTours] = useState([]); // Initially set tours to empty array

  // Function to remove a tour from the list
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id); // Filter out the tour with matching id
    setTours(newTours); // Update state with the filtered tours
  };

  // Function to fetch tours data from the API
  const fetchTours = async () => {
    setIsLoading(true); // Set loading to true before fetching data
    try {
      const response = await fetch(url); // Fetch data from the API
      const tours = await response.json(); // Parse response as JSON
      setTours(tours); // Update state with the fetched tours
    } catch (error) {
      console.log(error); // Log any errors during fetching
    } finally {
      setIsLoading(false); // Set loading to false after fetching (or on error)
    }
  };

  // useEffect hook to fetch tours on component mount
  useEffect(() => {
    fetchTours(); // Call fetchTours function on component mount
  }, []); // Empty dependency array ensures fetching only happens once

  // Render conditional content based on loading state and tours data
  if (isLoading) {
    return (
      <main>
        <Loading /> {/* Display Loading component while fetching tours */}
      </main>
    );
  }

  if (tours.length === 0) {
    // If there are no tours, display a message and a refresh button
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button
            type='button'
            className='btn'
            onClick={fetchTours}
            style={{ marginTop: '2rem' }}>
            Refresh List
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      {/* Render Tours component with data */}
    </main>
  );
}

export default App;
