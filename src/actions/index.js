import axios from "axios";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const getData = () => (dispatch) => {
  setTimeout(() => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_SMURFS", payload: res.data });
      })
      .catch((err) => {
        console.error("error fetching data from api. err: ", err);
        dispatch({ type: "SET_ERROR", payload: "No results found." });
      });
  }, 2000);
};
