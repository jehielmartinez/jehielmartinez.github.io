import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Router from './Router'

export default class App extends Component {
  render () {
    ReactGA.initialize('UA-145700530-1')
    ReactGA.pageview(window.location.pathname + window.location.search)

    return (
      <Router />
    )
  }
}
