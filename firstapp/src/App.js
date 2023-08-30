import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Btn from './Btn';
import ModeToggler from './ModeToggler';




// function App() {
//   return (
//     <ModeToggler/>
//   );
// };

// export default App;







  function App() {

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;

















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

