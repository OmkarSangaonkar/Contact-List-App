import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { useDispatch } from "react-redux";

const App = () => {
  // Creating a Redux dispatch function
  const dispatch = useDispatch();
  useEffect(() => {
    // Initialize an empty array to store contacts
    const data = [];
    // Fetching contacts from JSONPlaceholder API when the component mounts
    const promise = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((json) => {
          // eslint-disable-next-line array-callback-return
          json.map((contact) => {
            // Mapping fetched data to the required format
            data.push({
              id: contact.id,
              name: contact.name,
              number: contact.phone,
              email: contact.email,
            });
          });
        });
      // Dispatching an action to update Redux store with fetched contacts
      dispatch({ type: "FETCH_CONTACTS", payload: data });
    };
    promise();
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddContact />}></Route>
        <Route path="/edit/:id" element={<EditContact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
