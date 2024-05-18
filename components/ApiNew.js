// pages/my-page.js
'use client'// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/hello.com', // Replace with your API base URL
});

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};


const ApiNew = ({ data }) => {
  return (
    <div>
      {fetchData}
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const data = await fetchData('/endpoint');
    return {
      props: {
        data,
      },
      revalidate: 60, // Optional, to enable Incremental Static Regeneration (ISR)
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null,
      },
    };
  }
};

export default ApiNew;