import {useEffect, useState, useParams} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getDataNowPlaying } from "../redux/Action/NowPlaying.action";
import { getDataSearchMovie } from "../redux/Action/SearchMovie.action"
import { getDataDetailMovie } from "../redux/Action/DetailMovie.action";
// import { getDetailMovie } from '../redux/Reducers/DetailMovie.reducers';

import { Container, Spinner, Card, InputGroup, FormControl, Button, Modal, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"
// import DetailMovie from '../components/DetailMovie';

import '../styles/NowPlaying.css'

const NowPlaying = () =>{
    const dataNowPlaying = useSelector(state => state.showDataNowPlaying.data.results)
    const dataSearchMovie = useSelector(state => state.showSearchMovie.data.results)
    const dataDetailMovie = useSelector(state => state.getDetailMovie.data);
    console.log("data detail movie: ",dataDetailMovie)
    // const { id } = useParams()
    const [search, setSearch] = useState('')
    const [show, setShow] = useState(false);
    const [id, setId] = useState('')

    const dispatch = useDispatch()
    // const history = useHistory()

    

    useEffect(() => {  
        dispatch(getDataNowPlaying());
        
      }, [dispatch]);

      // const handleClick = (id) => {
      //   // history.push(`/detailMovie/${id}`)
      // }

      const changeHandler = (e) =>{
        setSearch(e.target.value)
      }

      const handleClickSearch = () =>{
        dispatch(getDataSearchMovie(search))
      }

      const handleClose = () => setShow(false);
      const handleShow = (id) => {
        
        console.log("id item: ", id)
        dispatch(getDataDetailMovie(id))
        setShow(true)
      };

    return (
      <div>
        <Container>
          <div>
            <h1
              style={{ textAlign: "center", marginTop: 100 }}
              className="center white-text"
            >
              Find Your Movie
            </h1>
          </div>
          {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}

          <div className="container">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">Search Here</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-describedby="basic-addon3"
                onChange={changeHandler}
                value={search}
              />
              <Button onClick={() => handleClickSearch()}>
                <Search size={20} />
              </Button>
            </InputGroup>
            <div className="container-content-movie">
              {dataSearchMovie !== undefined
                ? dataSearchMovie.map((item, index) => (
                    <Card
                      className="movie-content"
                      style={{ width: "18rem" }}
                      key={index}
                    >
                      <Card.Img
                        variant="top"
                        src={`http://image.tmdb.org/t/p/w185${item.poster_path}`}
                        // onClick={() => handleClick(item.id)}
                        onClick={()=> handleShow(item.id)}
                      />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.release_date}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))
                : ""}
            </div>
          </div>
          <h1 style={{ textAlign: "center", marginTop: 50 }}>
            Now Playing Movie
          </h1>
          <div className="container-content-movie">
            {dataNowPlaying !== undefined ? (
              dataNowPlaying.map((item, index) => (
                <Card
                  className="movie-content"
                  style={{ width: "18rem" }}
                  key={index}
                >
                  <Card.Img
                    variant="top"
                    src={`http://image.tmdb.org/t/p/w185${item.poster_path}`}
                    // onClick={() => handleClick(item.id)}
                    onClick={()=> handleShow(item.id)}
                    />
                    
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.release_date}</Card.Text>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <Spinner animation="border" variant="primary" size="lg" />
            )}
          </div>

          {dataDetailMovie !== undefined ? (
            
            <Modal show={show} onHide={handleClose} dialogClassName="modal-90w" centered>
              {/* {console.log("data now playing: ", dataDetailMovie)} */}
            <Modal.Header closeButton></Modal.Header>
            <Container>
            <Modal.Body>
              {/* <Container>
                <div className="image-modal-detail">
                  <img src={`http://image.tmdb.org/t/p/w185${dataDetailMovie.poster_path}`} alt=""/>
                </div>

              </Container> */}
              {/* {console.log("data dalam modal: ", dataDetailMovie)} */}
            
            <Card
                  // className="movie-content"
                  // style={{ width: "18rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={`http://image.tmdb.org/t/p/w185${dataDetailMovie.poster_path}`}
                    // onClick={() => handleClick(item.id)}
                    // onClick={()=> handleShow(dataNowPlaying.id)}
                  />
                  <Card.Body>
                    <Card.Title>{dataDetailMovie.title}</Card.Title>
                    <Card.Text>{dataDetailMovie.release_date}</Card.Text>
                    <Card.Text>{dataDetailMovie.overview}</Card.Text>
                  </Card.Body>
                </Card>
            
            </Modal.Body>
            </Container>
          </Modal>
          ):("")}
          
        </Container>
      </div>
    );
}

export default NowPlaying;