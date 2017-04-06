const Card = (props) => {
	return (
  	<div style = {{margin: '1em'}}>
    	<img width = "75" src = {props.url}/>
      <div style = {{display: 'inline-block', marginLeft: 10}}>
      	<div style = {{fontSize: '1.25em', fontWeight: 'bold'}}> 
        {props.name}
        </div>
        <div> {props.company} </div>
      </div>
    </div>
  );
};


const CardList = (props) => {
	return(
  	<div>
    	{props.users.map(user => <Card key = {user.id} {...user}/>)}
    </div>
  );
};

class Form extends React.Component {
state = {username: ''};
	handleSubmit = (event) => {
  	event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}`)
    	.then(resp => {
        	this.props.onSubmit(resp.data); //data from the Github Api response
          this.setState({username: ''});
      });
  };
	render(){
  	return	(
    	<form onSubmit = {this.handleSubmit}>
      	<input type = "text" 
        value = {this.state.username}
        onChange = {(event)=> this.setState({username: event.target.value})}
        placeholder = "Github Username" required/>
      	<button type = "submit"> Add Card </button>
      </form>
  	);
  }
}

class App extends React.Component {
	state = {
		users: [
			{name:'Kevin Do', url: "https://avatars1.githubusercontent.com/u/18412636?v=3", company: 'Northrop'},
  		{name:'Brian Vo', url: 'https://avatars1.githubusercontent.com/u/11608972?v=3', company: 'BAE'},
  		{name:'Eric Schleicher', url: 'https://avatars3.githubusercontent.com/u/8261783?v=3', company: 'Obrary'},
]
  };
  
  addNewCard = (cardInfo) => {
  	this.setState(prevState => ({
  		users: prevState.users.concat(cardInfo)
  	}));
  };
  
	render()	{
  	return (
    	<div>
      	<Form onSubmit = {this.addNewCard}/>
      	<CardList users = {this.state.users}/>
      </div>
    );
  }
}
ReactDOM.render(<App />, mountNode);