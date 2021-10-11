import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
// Mount Function to start up the app

const mount = (el, props) => {
  ReactDOM.render(<App {...props} />, el)
}

// If we are in development and in isolation
// call mount immediately

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

// We are running in host projhect
// and we should expoirt the mount fn

export { mount }
