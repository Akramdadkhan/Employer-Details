import React, { useState, useContext } from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Create = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const [users, setUser] = useContext(UserContext);

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id)
  };

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateLname = (e) => {
    setLname(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateState = (e) => {
    setState(e.target.value);
  };
  const updateCity = (e) => {
    setCity(e.target.value);
  };
  const updatePincode = (e) => {
    setPincode(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    e.stopPropagation()
    setUser([...users, { id: id, name: name, lname: lname, email: email, state: state, city: city, pincode: pincode }])
  }

  return (
    <div className="create">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>#</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={updateName}
            placeholder=" First Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            id="lname"
            name="lname"
            value={lname}
            onChange={updateLname}
            placeholder=" Last Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            // value={email}
            onChange={updateEmail}
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            id="state"
            // value={state}
            onChange={updateState}
            placeholder="Enter State"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            id="city"
            // value={city}
            onChange={updateCity}
            placeholder="Enter City"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Pincode</Form.Label>
          <Form.Control
            type="text"
            name="pincode"
            id="pincode"
            // value={pincode}
            onChange={updatePincode}
            placeholder="Enter Pincode"
          />
        </Form.Group>
        <Button className="action_btn" variant="primary" type="submit">
          Add
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="danger">
            cancel
          </Button>
        </Link>
        <Link to="/">
          <Button id="home" className="action_btn" variant="">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;
