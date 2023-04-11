const React = require('react');

//using functional component
function Show(props){
    const {fruit} = props;
    console.log(fruit);
    return (
        <div>
            <h1>Hello Show Page</h1>
            <p>The {fruit.name} is {fruit.color}
            {fruit.readyToEat 
                ? "Its ready to eat" 
                : "its is not ready to ear... Cant touch this"}
            </p>
        </div>
)
}


//using class component which is not used much 
// class Show extends React.Component{
//     render(){
//         return(
//                 <h1>Show Route</h1>
//             )
//     }
// }

module.exports = Show;