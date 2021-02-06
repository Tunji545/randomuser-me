import React from "react";

const App = () => (<PersonProfile />);

const PersonProfile = () => {

  return (
    <div>
      <Person />
    </div>
  )
}

const Person = () => {

  const URL = "https://randomuser.me/api/portraits/thumb/men/22.jpg"

  return (
    <div>
      <img src={URL} alt="" />
      <div>
        <h4>Name</h4>
        <h4>Job</h4>
      </div>
    </div>
  )
}

export default App;