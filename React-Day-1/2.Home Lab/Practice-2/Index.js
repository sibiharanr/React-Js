function Index()
{
    let age = 18;
    let name = "kiran";
    let setStatus = false;
    let userDefault =undefined;
    let responseValue = null;
    console.log(age);
    console.log(name);
    console.log(setStatus);
    console.log(userDefault);
    console.log(responseValue);
    let oldage = age;
    age=25;
    let status = setStatus;
    setStatus = true;
    console.log(age);
    console.log(setStatus);
    const Hi = ()=>(alert("Check the console output"))
    return(
        <div>
            <button onClick={Hi}>Primitive Data Type</button>
        </div>
    )

}
ReactDOM.render(<Index/>,document.getElementById('mydiv'))
