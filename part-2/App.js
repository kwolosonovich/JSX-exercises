const App = () => {
  return (
    <div>
      <Tweet
        username="Margs"
        name="Margaux"
        date="10/1/20"
        content="Best dinner everrrr"
      />
      <Tweet
        username="AvaGirl"
        name="Ava"
        date="10/2/20"
        content="Play time!"
      />
      <Tweet
        username="Margs"
        name="Margaux"
        date="10/3/20"
        content="What a great day for a car ride!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
