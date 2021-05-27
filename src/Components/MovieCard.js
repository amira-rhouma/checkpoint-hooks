import React from 'react'
import { Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component'


function MovieCard({film}) {
    console.log(film)
    return (
        <div style={{ width: '300px', height:'700px'}}>
            <Card >
  <Card.Img variant="top" src={film.posterUrl} />
  <Card.Body>
    <Card.Title style={{color:'black'}}>{film.title}</Card.Title>
    <Card.Text style={{color:'black'}}> {film.description}</Card.Text>
    <ReactStars
    value={film.rate}
    edit={false}
    />
  </Card.Body>
</Card>
            
        </div>
    )
}

export default MovieCard
