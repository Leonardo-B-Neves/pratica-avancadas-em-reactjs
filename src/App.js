import React from "react";
import Twitter from "./Twitter";

class App extends React.Component {
    state = {
        loading: false,
        actived: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: true
            })
        }, 3000)
    }

    onRemove = () => {
        this.setState({
            actived: false
        })
    }
    render() {

        const posts =
            [{
                title: "xpto",
                description: "foo"
            },
            {
                title: "xpto",
                description: "foo"
            }]

        return (<div>
            <button onClick={this.onRemove}>Remove componet</button>
            {this.state.actived && (
                <Twitter posts={posts} loading={this.state.loading}></Twitter>
            )}
            
        </div>)
    }
}

export default App