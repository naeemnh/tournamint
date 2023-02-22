import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './components/Layout';

import * as actions from "./store/actions";

import Home from './page-components/Home';


function App({ fetchUser }) {
  useEffect(() => {
    fetchUser()
  });

  return (
    <Layout>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default connect(null, actions)(App);
