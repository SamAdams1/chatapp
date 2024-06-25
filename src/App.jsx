import { useState } from 'react'
import './App.css'

import Axios from "axios"


function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userInfo, setUserInfo] = useState({})
  const [errorMsg, setErrorMsg] = useState("")

  function login() {
    Axios.get("http://127.0.0.1:3004/getUser", {params: {username: username, password: password}}).then((response) => {
      if (response.data.length == 0) {
        setErrorMsg("Incorrect username or password.")
      } else {
        setErrorMsg("")
        setUserInfo(response.data[0])
      }
      console.log(userInfo)
    }).catch((e) => console.log(e))
  }

  return (
    <>
      {/* <h1>Chat App</h1> */}
      <div>
        <div>
          <h4>{userInfo._id}</h4>
          <h1>{userInfo.username}</h1>
          <h1>{userInfo.password}</h1>
        </div>
        <h1>{errorMsg}</h1>
        <h1>Login</h1>
        <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <br />
        { (username != "" && password != "") ? (
          <button onClick={login}>Submit</button>
        ) : (
          <button disabled>Submit</button>
        ) }
      </div>
    </>
  )
}

export default App
