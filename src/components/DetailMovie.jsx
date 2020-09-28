import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getDataDetailMovie } from "../redux/Action/DetailMovie.action";
import { Container, Card, Spinner } from "react-bootstrap";
import '../styles/DetailMovie.css'

const DetailMovie = () =>{
    const dataDetailMovie = useSelector(state => state.getDetailMovie.data);
    const dispatch = useDispatch()
    const { id } = useParams()
    console.log("ini data",dataDetailMovie)
    

    useEffect(() => {
        dispatch(getDataDetailMovie(id));
        
      }, [dispatch]);

    return (
      <div className="container-detail-movie">
        <h1 style={{ textAlign: "center" }}> Detail movie</h1>

        <Container className="detail-movie">
          <Card style={{ width: "50%"}}>
            <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w185${dataDetailMovie.backdrop_path}`} />
            <Card.Body>
            <Card.Title>{dataDetailMovie.title}</Card.Title>
              <Card.Title className="genre-container">{dataDetailMovie.genres !== undefined ? (dataDetailMovie.genres.map ((item, index) => (<div className="genre" key={index}><p>{item.name}</p></div>)))  : (<Spinner animation="border" variant="primary" size="lg"/>) }</Card.Title>
                <Card.Title>Rating : {dataDetailMovie.vote_average}</Card.Title>
                <Card.Text>{dataDetailMovie.overview}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
        {/* video */}
        {/* <video width="300" height="150" controls="controls" autoPlay="true" src={`https://api.themoviedb.org/3/movie/${id}?api_key=fa9ce857395700f9e7e862a147bfffca`}/> */}
      </div>
    );
};

export default DetailMovie;


