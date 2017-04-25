const Stars = (props) => {
	
  // let stars = [];
  // for (let i = 0; i < numberOfStars; i++){
  // 	stars.push(<i key = {i} className = "fa fa-star"></i>);
  // }
  
	return(
  	<div className = "col-5">
      {_.range(props.numberOfStars).map(i=>
      	<i key = {i} className = "fa fa-star"> </i>
        )}
    </div>
  );
};
const Button = (props) => {
	return(
  	<div className = "col-2">
      <button className = "btn" disabled = {props.selectedNumbers.length === 0}>=</button>
    </div>
  );
};
const Answer = (props) => {
	return(
  	<div className = "col-5">
      {props.selectedNumbers.map((number, i) =>
      	<span key = {i}
        			onClick = {() => props.unselectNumber(number)}>{number}</span>
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
      	<span key = {i} className = {numberClassName(number)} 
        			onClick = {() => props.selectNumber(number)}>		
              {number} 
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
	selectedNumbers:[],
  numberOfStars: 1+ Math.floor(Math.random()*9),
  
};
selectNumber = (selectedNumber) => {
	if(this.state.selectedNumbers.includes(selectedNumber)){
  	return;
  }
	this.setState(prevState => ({
  	selectedNumbers: prevState.selectedNumbers.concat(selectedNumber)
  }));
};
unselectNumber = (selectedNumber) => {
	this.setState(prevState => ({
  	selectedNumbers: prevState.selectedNumbers.filter(number => number !== selectedNumber)
  }));
};

	render()	{
  
const { selectedNumbers, numberOfStars} = this.state;
  	return(
    	<div className = "container">
      	<h3>Play Nine</h3>
        	<div className = "row">
            <Stars numberOfStars= {numberOfStars}/>
            <Button selectedNumbers = {selectedNumbers}/>
            <Answer selectedNumbers = {selectedNumbers}
            				unselectNumber = {this.unselectNumber}/>
          </div>
          <br/>
          <Numbers selectedNumbers = {selectedNumbers} 
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