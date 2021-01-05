import React,{useEffect,createContext,useReducer,useContext} from 'react';
import ScrollableTabsButtonAuto from "./Tabs";
import  View from "./View"
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {initialState, reducer} from "./reducers/userReducer";

export const userContext = createContext()

const Routing = ()=>{
 
  return(
    <Switch >
        <Route exact path="/">
          <ScrollableTabsButtonAuto />
        </Route>
        <Route path="/View">
          <View />
        </Route>
    </Switch>
  )
}

function RouterLink() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <userContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <ScrollableTabsButtonAuto/>
        <View/>
        <Routing/>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default RouterLink;