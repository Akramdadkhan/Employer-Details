import React, { useContext, useState } from "react";
import "./Home.css";
import { Button, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Home = () => {
  const [users, setUser] = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(users);
  const searchHandle = (e) => {
    const filter = users.filter((item) => {
      return item.name.startsWith(searchText)
    })
    setData(filter)
  }
  return (
    <div>
      <Link to="/create">
        <Button id="addr" className="create__btn" variant="">
          + Add Record
        </Button>
      </Link>
      <Form.Control placeholder="search here" onChange={(e) => {
        setSearchText(e.target.value)
        searchHandle(e)
      }
      }></Form.Control>

      <Table striped bordered>
        <thead className="table_hed">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>State</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>{user.state}</td>
              <td>{user.city}</td>
              <td>{user.pincode}</td>
              <td>

                <Link to={"/edit/" + user.id}>
                  <Button className="action__btn" variant="info">
                    Update


                  </Button>
                </Link>
                <Link to={"/delete/" + user.id}>
                  <Button className="action__btn" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
