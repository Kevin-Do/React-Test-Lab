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
	let button;
  switch (props.answerIsCorrect) {
  	case true:
    	button =
        <button className = "btn btn-success">
              <i className = "fa fa-check"> </i> 
        </button>;
      break;
    case false:
    	button =
        <button className = "btn btn-danger">
            <i className = "fa fa-times"> </i> 
        </button>;
      break;
    default:
    button =
    	<button className = "btn" disabled = {props.selectedNumbers.length === 0}
      				onClick = { props.checkAnswer}>
              =
      </button>;
      break;
  }
  return(
  	<div className = "col-2">
      {button}
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
  answerIsCorrect: null,
  
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
checkAnswer = () => {
this.setState(prevState => ({
	answerIsCorrect: prevState.numberOfStars === 
  	prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
	}));
};
	render()	{
  
const { 
			selectedNumbers, 
			numberOfStars, 
      answerIsCorrect
      }  = this.state;
  	return(
    	<div className = "container">
      	<h3>Play Nine</h3>
        	<div className = "row">
            <Stars numberOfStars= {numberOfStars}/>
            <Button selectedNumbers = {selectedNumbers}
            				checkAnswer = {this.checkAnswer}
                    answerIsCorrect = {answerIsCorrect}/>
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