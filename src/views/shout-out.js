import React from 'react'

import { Helmet } from 'react-helmet'

import './shout-out.css'

const ShoutOut = (props) => {
  return (
    <div className="shout-out-container">
      <Helmet>
        <title>Shout-Out - AbApps</title>
        <meta property="og:title" content="Shout-Out - AbApps" />
      </Helmet>
    </div>
  )
}

export default ShoutOut
