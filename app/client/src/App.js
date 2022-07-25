import SignIn from './SignIn';
import SignUp from './SignUp';
import CollapsibleExample from './Bootstarp';
import './App.css';
 
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import React, { useState } from 'react'; 
import NewAppointment from './NewAppointment';


export default function Main(){
    const [loggedIn, setIsLoggedIn] = useState(true);
    // setIsLoggedIn(true);

    return(<>
            <div className='Routes'>
    <Router>
        
        {loggedIn ? <CollapsibleExample IsSign = {true}/>: <CollapsibleExample IsSign = {false} /> }
    {/* <CollapsibleExample IsSign = {false} /> */}
 
    {/* <Routes >
            <Route exact path="/">
              <Home />
            </Route>
            <Route path={"/#home"} component = {SignIn}/>
            <Redirect to="/" /> : <SignIn />
            </Route>
            <Route path="/todos">
              {loggedIn ? <Todos /> : <Redirect to="/login" />}
            </Route>
            <Route path="/albums">
              {loggedIn ? <Albums /> : <Redirect to="/login" />}
            </Route>
            <Route path="/posts">
              {loggedIn ? <Posts /> : <Redirect to="/login" />}
            </Route>
            <Route path="/info">
              {loggedIn ? <Info /> : <Redirect to="/login" />}
            </Route>

            <Route path={'/Comments/:id'} component={Comments} />

            <Route path={'/Photos/:id'} component={Photos} />
          </Routes > */}
  
       
        <Routes >
       
              <Route path='/SignIn' element={loggedIn?<Main/>:<SignIn/>}></Route>
              <Route path ='/#features' element={<SignIn/>} />
              <Route path ='/SignUp' element={loggedIn?<Main/>:<SignUp/>} />
              <Route path ='/NewAppointment' element={<NewAppointment/>} />

     

          </Routes>
    
   
          </Router>
          </div>
          </>
    )


}