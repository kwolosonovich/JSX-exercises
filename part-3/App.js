const App = () => (
  <div>
    <p>Learn some information about this person</p>
    <Person
      firstName="Ava"
      age="9"
      hobbies={["tug-of-war", "fetch", "car washes"]}
    />
    <Person
      firstName="Margauxxxxx"
      age="20"
      hobbies={["cuddling", "napping", "car rides"]}
    />
    <Person
      firstName="Grant"
      age="2"
      hobbies={["playing at the park", "zoo trips", "bike rides"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
