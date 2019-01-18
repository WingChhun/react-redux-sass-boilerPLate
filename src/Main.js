import React, {Component} from 'react';
import {BrowserRoute as Router, Link, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from "./redux/store";
import LandingContainer from "./pages/Landing/Landing.container";
class Main extends Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (

            <Provider store={store}>

                <Router basename={process.env.PUBLIC_URL}>

                    <Switch>

                        <Route exact path={'/'} component={LandingContainer}/>
                    </Switch>

                </Router>

            </Provider>

        )
    }
}

export default Main;