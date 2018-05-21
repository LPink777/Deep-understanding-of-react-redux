import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Provider extends React.Component {
    getChildContext(){
        return {
            store: this.props.store,
        }
    }
    render(){
        return this.props.children;
    }
}

Provider.ChildContextTypes = {
    store: PropTypes.object,
}