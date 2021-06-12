import React, {FC} from "react";
import useStyles from './styles';
import moment from 'moment';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import Rating from "../Rating/Rating";
import {Star} from "@material-ui/icons";


const Movie : FC<any> = ({ post, ...props }) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}    >
            <CardMedia className={classes.media} image={`https://www.themoviedb.org/t/p/w220_and_h330_face${post.poster_path}`} title={post.title} />
            <div className={classes.overlay}>

                <Typography variant="body2">{moment(post.release_date).fromNow()}</Typography>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2" onClick={() =>
                    window.open(
                        `https://www.themoviedb.org/movie/${post.id}`,
                        '_blank'
                    )
                }>
                    {post.title}</Typography>

            </div>
            <Rating rating={post.vote_average}/>
        </Card>
    );
};

export default Movie;