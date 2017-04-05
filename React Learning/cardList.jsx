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

let users = [
	{name:'Kevin Do', url: "https://avatars1.githubusercontent.com/u/18412636?v=3", company: 'Northrop'},
  {name:'Brian Vo', url: 'https://avatars1.githubusercontent.com/u/11608972?v=3', company: 'BAE'},
  {name:'Eric Schleicher', url: 'https://avatars3.githubusercontent.com/u/8261783?v=3', company: 'Obrary'}
];

const CardList = (props) => {
	return(
  	<div>
    	{props.users.map(user => <Card {...user}/>)}
    </div>
  );
};
ReactDOM.render(<CardList users = {users}/>, mountNode);