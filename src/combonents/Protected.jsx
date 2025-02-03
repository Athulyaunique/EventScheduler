import React, { useEffect, useState } from 'react';
import { getProtectedData } from '../api/api';


const Protected = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await getProtectedData(token);
        
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? data.message : 'Loading...'}</div>;
};

export default Protected;