'use client'

import axios from "axios";

export default function Home() {
  // Fetch request
  async function postWithFetch() {
    const data = {
      email: 'one@one.com',
      password: '1234',
      name: 'one',
      projectId: "669b35aa001f5bd906be",
      apiEndpoint: "https://cloud.appwrite.io/v1"
    };

    try {
      const response = await fetch('https://backend-codershubinc.vercel.app/appwrite/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'cors'
      });

      const result = await response.json();
      console.log('Fetch Result:', result);

    } catch (error) {
      console.log('Fetch Error:', error);
    }
  }

  // Axios request
  async function postWithAxios() {
    const data = {
      email: 'one@one.com',
      password: '1234',
      name: 'one',
      projectId: "669b35aa001f5bd906be",
      apiEndpoint: "https://cloud.appwrite.io/v1"
    };

    try {
      const response = await axios.post('https://backend-codershubinc.vercel.app/appwrite/auth/login', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Axios Result:', response.data);

    } catch (error) {
      console.log('Axios Error:', error);
    }
  }

  return (
    <div>
      <button onClick={postWithFetch}>Test with Fetch</button>
      <button onClick={postWithAxios}>Test with Axios</button>
    </div>
  );
}
