import React from "react";

{/* Ciclo de vida */}
class Twitter extends React.Component{

  state ={
    tweet:  "title"
  }
  componentDidMount(){
    const { posts } = this.props
    console.log("componentDidMount ", posts)
  }

  componentDidUpdate(prevProps){
    const { loading } = this.props
    if(this.props.loading !== prevProps.loading){
      console.log("componentDidUpdate", loading)
    }
  }

  componentWillUnmount(){
    console.log("componentWillUnmount: fui removido : (")
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.state.tweet !== nextState.tweet
  }

  tweet = () => {
    this.setState({
      tweet: true
    })
  }

  render(){
    const { posts } = this.props
    console.log("render", posts)
    return (
      <div>
        <button onClick={this.tweet}>Re-render</button>
        teste
      </div>
    )
  }
}

export default Twitter