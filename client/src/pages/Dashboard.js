import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_ITEM } from "../utils/mutations";
import Auth from "../utils/auth";
import MyItem from "../components/MyItem";

function Dashboard() {
  const [formState, setFormState] = useState({
    title: "",
    desc: "",
    price: "",
    file: null,
  });

  const [addItem] = useMutation(ADD_ITEM);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleUploadImage = async (event) => {
    event.preventDefault();

    let base64String = "";

    var reader = new FileReader();

    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

      setFormState({
        ...formState,
        file: base64String,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await addItem({
      variables: {
        itemName: formState.title,
        itemDesc: formState.desc,
        itemPrice: formState.price,
        itemImage: formState.file,
      },
    });

    setFormState({
      title: "",
      desc: "",
      price: "",
      file: null,
    });
  };

  return (
    <>
      <h1>Add New Item</h1>
      {Auth.loggedIn() ? (
        <>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" name="title" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDesc">
              <Form.Label>Description:</Form.Label>
              <Form.Control type="text" name="desc" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Pricing:</Form.Label>
              <Form.Control type="text" name="price" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFile">
              <Form.Label>Image:</Form.Label>
              <Form.Control
                type="file"
                name="file"
                onChange={handleUploadImage}
              />
            </Form.Group>
            <Button variant="info">Add New Item</Button>
          </Form>
          <div className="mb-3">
            <MyItem />
          </div>
        </>
      ) : (
        <div className="">
          <p>Please login into your account dashboard</p>
        </div>
      )}
    </>
  );
}

export default Dashboard;
