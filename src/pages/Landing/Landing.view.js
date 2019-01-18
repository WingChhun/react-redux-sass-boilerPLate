import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Landing extends Component {
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    componentWillReceiveProps = props => {}

    render()
    {
        return (
            <div>

                <h1>
                    Landing Component</h1>
            </div>
        )
    }
}

Landing.propTypes = {}

Landing.defaultProps = {}

export default Landing;