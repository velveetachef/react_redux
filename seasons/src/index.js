import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props); // always

        // ONLY TIME YOU DIRECT ASSIGN STATE!!!!
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // setState !!!!!!!!!!
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        )
    }

    // React says this must be defined
    render() {
        return <div>Latitiue: {this.state.lat}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
