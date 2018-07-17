/*
This ErrorBundary can be used to mask the error message to the user in production
*/

import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;