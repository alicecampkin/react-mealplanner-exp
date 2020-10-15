/* eslint-disable react/no-array-index-key */
import React from 'react';
// import Gallery from './components/Gallery';
import Layout, { Inner } from './components/Layout';
import MealCalendar from './components/MealCalendar';


function App() {
  return (
    <Layout>
      <Inner>
        <h1>React Sandbox</h1>
        <MealCalendar />
      </Inner>
    </Layout>
  );
}

export default App;
