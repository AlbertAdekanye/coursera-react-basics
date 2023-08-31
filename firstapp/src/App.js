// import logo from './logo.svg';
import './App.css';
// import Card from './Card';
// import Btn from './Btn';
// import ModeToggler from './ModeToggler';
// import Fruits from './Fruits';
// import FruitsCounter from './FruitsCounter';
import React from 'react';
import Contact from './Contact';
import Homepage from './Homepage';
import AboutLittleLemon from './AboutLittleLemon';
import {Routes, Route, Link} from 'react-router-dom';





function App() {
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/Contact" className="nav-item">Contact</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
      </Routes>
    </div>
  );
};

export default App;














// function App() {
//   const [fruits] = React.useState([
//       {fruitName: 'apple', id: 1},
//       {fruitName: 'apple', id: 2},
//       {fruitName: 'plum', id: 3},
//   ]);

//   return (
//     <div className="App">
//       <h1>Where should the state go?</h1>
//       <Fruits fruits={fruits} />
//       <FruitsCounter fruits={fruits} />
//     </div>
//   );
// }

// export default App;



// function App() {
//   return (
//     <ModeToggler/>
//   );
// };

// export default App;


// function Main(props) { 
//   return <Header msg={props.msg} />; 
// };

// function Header(props) { 
//   return ( 
//     <div style={{ border: "10px solid whitesmoke" }}> 
//       <h1>Header here</h1> 
//       <Wrapper msg={props.msg} /> 
//     </div> 
//   ); 
// };

// function Wrapper(props) { 
//   return ( 
//     <div style={{ border: "10px solid lightgray" }}> 
//       <h2>Wrapper here</h2> 
//       <Button msg={props.msg} /> 
//     </div> 
//   ); 
// };

// function Button(props) { 
//   return ( 
//     <div style={{ border: "20px solid orange" }}> 
//       <h3>This is the Button component</h3> 
//       <button onClick={() => alert(props.msg)}>Click me!</button> 
//     </div> 
//   ); 
// };

// function App() { 
//   return ( 
//     <Main  
//       msg="I passed through the Header and the Wrapper and I reached the Button component"  
//     /> 
//   ); 
// }; 

// export default App;







//   function App() {

//   function handleClick() {
//     let randomNum = Math.floor(Math.random() * 3) + 1;
//     console.log(randomNum);
//     let userInput = prompt('type a number');
//     alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
//   }
//   return (
//     <div>
//       <h1>Task: Add a button and handle a click event</h1>
//       <button onClick={handleClick}>Guess the number between 1 and 3</button>
//     </div>
//   );
// }

// export default App;

















// function App(){
//   return (
//     <Btn/>
//   );
// };

// export default App;


// function App() {
//   return (
//     <div className="App">
//         <h1>Task: Add three Card elements</h1>
//         <Card h2="First card's h2" h3="First card's h3" />
//         <Card h2="Second card's h2" h3="Second card's h3" />
//         <Card h2="Third card's h2" h3="Third card's h3" />
//     </div>
//   )
// }
// export default App;





// import Heading from "./Heading";

// function App() {
//     return (
//         <div className="App">
//             <Heading firstName="Albert" />
//             <Heading firstName="Any name other than Albert!" />
            
//         </div>
//     );
// };

// export default App;

