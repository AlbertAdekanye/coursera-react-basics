function  ModeToggler() {
  const darkModeOn = true;
  const darkMode = <h1>Dark Mode is On</h1>
  const lightMode = <h1>Light Mode is On</h1>

  function handleClick() {
    // eslint-disable-next-line no-const-assign
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      console.log("Dark Mode is On");
    } else {
      console.log("Light Mode is On");
    }
  }

  return (
      <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handleClick}
          Click me
        ></button>
      </div>
  );

};
export default ModeToggler;