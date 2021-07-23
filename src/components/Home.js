import React, { useState, useEffect, Fragment } from "react";
//API
import API from "../API";
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//Components
import HeroImage from "./HeroImage";
//Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
//Images
import NoImage from '../images/no_image.jpg';
import Grid from "./Grid";
import Thumb from "./Thumb";

const Home = () => {
    const { state, loading, error } = useHomeFetch();

    return (
        <Fragment>
            {state.results[0] ?
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        title={state.results[0].original_title}
                        text={state.results[0].overview}
                    />
                : null
            }
            <Grid header='Popular Movies'>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
        </Fragment>
    )
}

export default Home;