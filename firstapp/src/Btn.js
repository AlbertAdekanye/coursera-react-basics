function Btn() {
    const clickHandler = () => console.log("clicked!"); 
    return (
        <div>
            <button onClick={clickHandler}>
                Click me!
                </button>
        </div>
    );
};

export default Btn;