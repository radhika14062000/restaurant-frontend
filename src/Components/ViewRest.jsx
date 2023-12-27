import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestCard from './RestCard';
import RestReview from './RestReview';

function ViewRest() {
  const[restDetails,setRestdetails]= useState({})
  //useparams-used to get path parameter from the url
  // const paraId=useParams()
  // console.log(paraId.id);

  //destructure
  const {id}=useParams()
  console.log(id);

  //API call to get details of the particular restaurant using the path paramater

  const base_url='https://restaurant-backend-vd7o.onrender.com/restaurants'
  const fetchRest=async()=>{
    const result=await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setRestdetails(result.data)
  }
  useEffect(()=>{fetchRest()},[])
  return (
    <div>
      <Row>
        <Col>
        <img src={restDetails.photograph} alt="" style={{width:'450px',height:'500px',margin:'40px'}} />
        </Col>
        <Col>
        <div class="container my-5 p-5">
      <ListGroup>
      <h1 className='text-center'>{restDetails.name}</h1>
      <ListGroup.Item>Address: {restDetails.address}</ListGroup.Item>
      <ListGroup.Item>Neighbourhood:{restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine type:{restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview review={restDetails.reviews} /></ListGroup.Item>
      </ListGroup>

        </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest