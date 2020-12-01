import {useEffect, useState, useParams} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getDataNowPlaying } from "../redux/Action/NowPlaying.action";
import { getDataSearchMovie } from "../redux/Action/SearchMovie.action"
import { getDataDetailMovie } from "../redux/Action/DetailMovie.action";
// import { getDetailMovie } from '../redux/Reducers/DetailMovie.reducers';

import { Container, Carousel, Spinner, Card, InputGroup, FormControl, Button, Modal, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"
// import DetailMovie from '../components/DetailMovie';

import '../styles/Home.css'

const Home = () => {
    const dataNowPlaying = useSelector(state => state.showDataNowPlaying.data.results)
    console.log("data now playing: ",dataNowPlaying)
    const dispatch = useDispatch()

    useEffect(() => {  
        dispatch(getDataNowPlaying());
        
      }, [dispatch]);


    return (
      <div style={{ marginTop: 50 }}>
        <Container fluid>
        <Carousel
        controls={false}
        indicators={false}
        >
          <InputGroup className="mb-3" style={{position:"absolute", top:200,left:400 , zIndex:9999, borderRadius:11, width:700}}>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">Search Here</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-describedby="basic-addon3"
                placeholder="Search You'r movie"
                // onChange={changeHandler}
                // value={search}
              />
            </InputGroup>
            {dataNowPlaying !== undefined ? (dataNowPlaying.map((item, index)=>(
                <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={`http://image.tmdb.org/t/p/w780${item.backdrop_path}`}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.genre}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))):('')}
        </Carousel>
        </Container>
      </div>
    );
}

export default Home;