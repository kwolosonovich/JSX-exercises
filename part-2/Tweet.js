const Tweet = (props) => (
  <div>
    <h2>{props.username}'s Tweeted... </h2> 
    <h1>{props.content} </h1>
    <h5>Witten by: {props.name}</h5>
    <h5>Posted: {props.date}</h5>
  </div>
);