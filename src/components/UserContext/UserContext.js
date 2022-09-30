import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {

  const [users, setUsers] = useState([
    { id: 1, name: "Akram", lname: "khan", email: "akramkhan@gmail.com", state: "Maharshta", city: "Nanded", pincode: 431604 },
    { id: 2, name: "Wahaj", lname: "Amshan", email: "wahaj@gmail.com", state: "Maharshta", city: "Nanded", pincode:43106 },
    { id: 3, name: "Aatif", lname: "Shaikh", email: "atif4@gmail.com", state: "Mahrashtara", city: "Nanded", pincode: 431604 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
