import React, { Component } from 'react';

class ErrorBoundary extends Component {
    
    state = {
         hasError: false,
         errrorMessage: ''
    }
////// method that recieves potential error and info about the error that is passed automatically by react, will be excuated when a component wrapped with this class has error
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error})
    }

    render(){
        if(this.state.hasError){
            return <h1>something went horribly wrong! {this.state.errrorMessage}</h1>
        } else{
            return this.props.children;
        }
        
    }
} 

export default ErrorBoundary;