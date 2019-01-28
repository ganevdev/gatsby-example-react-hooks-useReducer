import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import App from '../components/ReducerList'

const SecondPage = () => (
  <Layout>
    <App />
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
