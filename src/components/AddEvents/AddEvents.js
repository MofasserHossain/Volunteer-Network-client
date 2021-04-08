import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddEvent.css';
const axios = require('axios');
const AddEvents = () => {
  const history = useHistory();
  const [loadImage, setLoadImage] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      imageUrl: imageUrl,
    };
    console.log(eventData);
    const url = `https://serene-garden-27348.herokuapp.com/addEvent`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    }).then((res) => {
      console.log('response', res);
      res && history.push('/');
    });
    // .then((data) => {
    //   console.log('result ', data);
    // });
  };
  const error = {
    color: 'red',
    display: 'block',
  };
  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', ' 65fc8ae8a7308f953fbf7a8227f54858');
    imageData.append('image', e.target.files[0]);
    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        console.log(response);
        setImageUrl(response.data.data.display_url);
        setLoadImage(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="from">
        <label htmlFor="">Enter Your Product Name</label>
        <input
          name="name"
          label="Enter Your Product Name"
          placeholder="Please enter your product Name"
          ref={register({ required: true })}
        />
        {errors.name && <span style={error}>This field is required</span>}
        <label htmlFor="">Upload Your Product Image</label>
        <input name="image" type="file" onChange={handleImageUpload} />
        <input
          className={loadImage ? 'btn btn-primary' : 'btn btn-primary disable'}
          style={{ padding: '10px 20px' }}
          type="submit"
        />
      </form>
    </Container>
  );
};

export default AddEvents;
