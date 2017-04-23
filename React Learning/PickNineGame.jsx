const Stars = (props) => {
	const numberOfStars = 1+ Math.floor(Math.random()*9);
  
  // let stars = [];
  // for (let i = 0; i < numberOfStars; i++){
  // 	stars.push(<i key = {i} className = "fa fa-star"></i>);
  // }
  
	return(
  	<div className = "col-5">
      {_.range(numberOfStars).map(i=>
      	<i key = {i} className = "fa fa-star"> </i>
        )}
    </div>
  );
};
const Button = (props) => {
	return(
  	<div className = "col-2">
      <button>=</button>
    </div>
  );
};
const Answer = (props) => {
	return(
  	<div className = "col-5">
      {props.selectedNumbers.map((number, i) =>
      	<span key = {i}>{number}</span>
        )}
    </div>
  );
};

const Numbers = (props) => {
//const arrayOfNumbers = _.range(1,10);
//lodash non inclusive
const numberClassName = (number) => {
	if (props.selectedNumbers.includes(number)){
  	return 'selected';
  
  }
}
	return(
  	<div className = "card text-center">
    	<div>
      {Numbers.list.map((number,i) =>
      	<span key = {i} className = {numberClassName(number)}> {number} 
        			onClick = {() => props.selectNumber(number)}			
        </span>
      )}
      </div>
    </div>
  );
};

Numbers.list = _.range(1,10);
//property of Numbers

class Game extends React.Component{
state = {
	selectedNumbers:[2,4,6],
};
selectNumber = (selectedNumber) => {
	this.setState(prevState => ({
  	selectedNumbers: prevState.selectedNumbers.concat(selectedNumber)
  });
};
	render()	{
  	return(
    	<div className = "container">
      	<h3>Play Nine</h3>
        	<div className = "row">
            <Stars />
            <Button />
            <Answer selectedNumbers = {this.state.selectedNumbers}/>
          </div>
          <br/>
          <Numbers selectedNumbers = {this.state.selectedNumbers} 
          				 selectNumber = {this.selectNumber}/>
      </div>
    );
  }
}

class App extends React.Component {
	render(){
  	return(
    	<div>
      	<Game />
        
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);