import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Screentwo from './Screentwo'
import Screenone from './Screenone'

class Main extends Component {
    render() {
        return (
            <main>
              <Switch>
                <Route exact path='/' component={Screenone}/>
                <Route path='/screen2' component={ Screentwo }/>
              </Switch>
            </main>
          )
    }
}

export default Main
