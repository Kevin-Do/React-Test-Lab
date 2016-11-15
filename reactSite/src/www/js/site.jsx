"use strict";
const 
    React = require("react"), 
    ReactDOM =require("react-dom");

let 
    ItemList = React.createClass({

        render: function(){
            //this represents the component
            // props refers to the passed in parameters
            
            let items = this.props.items.map(function(item){
                return <li>{item}</li>
            });

            return <div>
             <h1> {this.props.header} </h1>

                <ul>
                {items}
                </ul>
            
            </div>
            ;
        }
         
    });

let
    items = [
        "one", "two", "doot didily"
    ];

ReactDOM.render(<ItemList header='ItemList' items = {items}/>, 
    document.querySelector("[class = 'container']"));