const Person = (props) => {
    let noVote = "You must be 18 to vote";
    let vote = "Please go vote!";


    return (
      <ul>
        <h1>
          Name: {props.firstName.substring(0, 6)} <br></br> Age: {props.age}
        </h1>
        <h3>{props.age < 19 ? noVote : vote} </h3>
        <h3>Hobbies</h3>
        <ul>{props.hobbies.map(hobby => (
                <li>{hobby}</li>
            ))}
        </ul>
      </ul>
    ); 
}