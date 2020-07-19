import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ResumePage from './screens/Resume/ResumePage'

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <ResumePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
