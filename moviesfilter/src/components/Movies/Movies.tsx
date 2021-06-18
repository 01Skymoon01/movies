import React, {useEffect, useState} from 'react';
import {Grid, CircularProgress, Button} from "@material-ui/core";
import useStyles from './styles';
import Movie from './Movie/Movie';
import { Box } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const Movies = () => {

    const classes = useStyles();
    const [moviesItems, setMoviesItems] = useState<any[]>([])
    const [totalPage, setTotalPage] = useState(1);
    const [CountMovie, setCountMovie] = useState(0);
    const [activePage, setActivePage] = useState(1);

    // Fetch the data
    const getMovies = async (ap: number) =>
    {
        if(ap >= 26) {
            await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=6dc7584bed2210b0c72164dd7f6c6f17&page=1&language=en-US`)
                .then(res => res.json())
                .then(data => {
                    setMoviesItems(data.results)
                    setTotalPage(data.total_pages)
                    setCountMovie( data.results.length )
                    setActivePage( 1);
                });
        } else {

            await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=6dc7584bed2210b0c72164dd7f6c6f17&page=${ap}&language=en-US`)
                .then(res => res.json())
                .then(data => {
                    setMoviesItems(data.results)
                    setTotalPage(data.total_pages)
                    setCountMovie( CountMovie + data.results.length)
                    setActivePage(ap);

                });

        }
    }

    useEffect(()=> {
        getMovies(1);
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


    useEffect(()=>{

        if(CountMovie) console.log("CountMovie: ", CountMovie)

    },[CountMovie])


    return (
        <>
            {!moviesItems.length ? <CircularProgress /> : (
                <>
                    <div className="m-8 "> <Button variant="outlined" onClick={e=> sortValueHandle()}  >sort by title</Button></div>
                    <div className="m-8 "> <Button variant="outlined" onClick={e=> getMovies(activePage + 1)}  >Next</Button></div>


                <div className="grid grid-cols-1 md:grid-cols-3 justify-xs-center">
                {
                    moviesItems.sort((a,b) => sortValue ? ((a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)) :
                        ((a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0))
                    ).map(
                        (Item) => (
                            <div className="m-5">
                               <Movie post={Item}/>
                            </div>
                        )
                    )

                }

                </div>

            </>
            )}
        </>
    );
};

export default Movies;