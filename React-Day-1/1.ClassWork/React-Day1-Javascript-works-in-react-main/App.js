console.log("Message to Developer")
function AlertMsg(){
    const HI =()=>{alert("Message from Javascript Alert!")}
    return <div><button onClick={HI}>Click</button></div>
};
ReactDOM.render(<AlertMsg/>,document.getElementById('mydiv'))