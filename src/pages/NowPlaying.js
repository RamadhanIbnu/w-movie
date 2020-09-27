import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container, Spinner, Card } from "react-bootstrap";
import '../styles/NowPlaying.css'
import { getDataNowPlaying } from "../redux/Action/NowPlaying.action";
import { useDispatch, useSelector } from "react-redux";
// import { getDataDetailMovie } from "../redux/Action/DetailMovie.action";
// import DetailMovie from '../components/DetailMovie';
// import { getDetailMovie } from '../redux/Reducers/DetailMovie.reducers';

const NowPlaying = () =>{
    const dataNowPlaying = useSelector(state => state.showDataNowPlaying.data.results)
    const dispatch = useDispatch()
    const history = useHistory()
    console.log("data now playing",dataNowPlaying);

    

    useEffect(() => {
        dispatch(getDataNowPlaying());
        
      }, [dispatch]);

      const handleClick = (id) => {
        history.push(`/detailMovie/${id}`)
      }

    return (
      <div>
        <Container>
          <h1 style={{ textAlign: "center" }}>Now Playing Movie</h1>
          <div className="container-content-movie">
            {dataNowPlaying !== undefined ? (
              dataNowPlaying.map((item, index) => (
                <Card className="movie-content" style={{ width: "18rem" }} key={index}>
                  <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w185${item.poster_path}`} onClick={() => handleClick(item.id)}/>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.release_date}</Card.Text>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <Spinner animation="border" variant="primary" size="lg"/>
            )}
          </div>
        </Container>
      </div>
    );
}

export default NowPlaying;