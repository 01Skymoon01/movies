import React, {useEffect, useState} from 'react';
import {Grid, CircularProgress, Button} from "@material-ui/core";
import useStyles from './styles';
import Movie from './Movie/Movie';
import { Box } from '@material-ui/core';
import { GridList } from '@material-ui/core';

const Movies = () => {

    const classes = useStyles();
    const [moviesItems, setMoviesItems] = useState<any[]>([])

    // Fetch the data
    const getMovies = async () =>
    {
        await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=6dc7584bed2210b0c72164dd7f6c6f17&language=en-US')
            .then(res => res.json())
            .then(data => {
                console.log('data', data.results);
                setMoviesItems(data.results)
            });
    }

    useEffect(()=> {
        getMovies();
    },[])

    useEffect(()=>{

        if(moviesItems) console.log("moviesItems: ", moviesItems)

    },[moviesItems])

    // ** Sort **
    const [sortValue, setSortValue] = useState(true);
       const sortValueHandle = () => {
           if(sortValue)   setSortValue(false);
           else setSortValue(true);
        }

    return (
        <>
            {!moviesItems.length ? <CircularProgress /> : (
                <>
                    <div className="m-8 "> <Button variant="outlined" onClick={e=> sortValueHandle()}  >sort by title</Button></div>

            <Grid container spacing={10} >
                {
                    moviesItems.sort((a,b) => sortValue ? ((a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)) :
                        ((a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0))
                    ).map(
                        (Item) => (
                            <Grid key={Item.id} item xs={4} spacing={10}>
                               <Movie post={Item}/>
                            </Grid>
                        )
                    )
                }
            </Grid >
            </>
            )}
        </>
    );
};

export default Movies;