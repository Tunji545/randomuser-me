import React from "react";
import "./App.css"

const App = () => <PersonProfile />

const PersonProfile = () => {
  const people = [
    {
      img: 22,
      name: "John",
      job: "Developer"
    },
    {
      img: 48,
      name: "Bob",
      job: "Designer"
    },
    {
      img: 22,
      name: "peter",
      job: "artist"
    }
  ]

  return (
    <div>
      <Person person={people[0]} />
      <Person person={people[1]}>
        This should had been a dummy text consisting of fifteen words to mimic a sentence.
      </Person>
      <Person person={people[2]} />
    </div>
  ) 
}

const Person = (props) => {
  const {img, name, job} = props.person;
  const {children} = props;

  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  )
}

export default App;