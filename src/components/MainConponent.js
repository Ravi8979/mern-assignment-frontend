// components/MainContent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/data'); // Update URL
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main>
      {/* Add your main content here */}
      <section>
        <h2>Data Section</h2>
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              <strong>{item.title}</strong>: {item.description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
