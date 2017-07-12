class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {count : 0};

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment(e){
    this.setState((prevState, props) =>(
          {count: prevState.count + props.step}
          ));
  }
  decrement(e){
    if(this.state.count > 0)
      this.setState((prevState, props) =>(
          {count: prevState.count - props.step}
      ));
    else
      console.log('Vous êtes deja sans copine');
  }
  render() {
    return (
      <div>
      <h1 style={{color: this.props.color}}>Vous avez {this.state.count} compine .</h1>
      <button onClick={this.increment}>J'ai une nouvelle copine</button>
      <button onClick={this.decrement}>J'ai perdu une copine</button>
      </div>
      )
  }
}

const App = (props) => {
  return (
    <div>
      <Counter color="green" step={1}/>
      <Counter color="orange" step={2}/>
      <Counter color="hotpink" step={3}/>
    </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))
