import React from 'react';

// const App = (props) => {
//     return (<h1>{props.text}</h1>)
// }

export default class App extends React.Component {
    constructor(props) {
        super(props)

    this.state = {
        message: "",
        text: "Everything is awesome!"
        }   
    }

    handleClick (value) {
        this.setState({message: value})

    }
/////I didnt finish the last step of the lab-- I need a little help with it
    

    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <h1>{this.state.text}</h1>
                <input 
                placeholder = {"Type Here"}                 //attribute values therefore use { }
                value = {this.state.message}
                onChange = {(event) => {this.setState({message: event.value})}}
                />
                <button
                onClick = {(event) => {this.handleClick()}}
                >Post!</button>

            </div>    
        )
    }
}

