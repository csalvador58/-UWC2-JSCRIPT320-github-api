import './App.css';
import GithubProfile from './GithubProfile';
import React, {useState} from 'react';
import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';

const Home = () =>{ 
  const {search} = useLocation();
  console.log(search);

  return (<div>
    <h1>Home</h1>
    <Link to="about">About</Link>
  </div>)
};
const About = () =>( 
  <div>
    <h1>About</h1>
  </div>
);
const GithubProfilePage = () =>{
  const {githubUsername} = useParams();
  console.log(githubUsername)
  
  return (
    <div>
      <h1>GithubProfile</h1>
      <GithubProfile username={githubUsername}/>
    </div>
  )
}

function App() {
  // const [username, setUsername] = useState('');

  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log(event.target[0].value)
  //   setUsername(event.target[0].value)
  // }



  // http://localhost:3000/github-user/jimmynono


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About/>} />
        <Route path="github-user/:githubUsername" element={<GithubProfilePage />} />
      </Routes>
      {/* <form onSubmit={onFormSubmit}>
        <label htmlFor='username-input'>Username: </label>
        <input type="text" id="username-input" />
        <button type="submit">Search</button>
      </form>
      <GithubProfile username={username}/> */}
    </div>
  );
}

export default App;
