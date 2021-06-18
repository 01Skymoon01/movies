import React, {FC, useState} from 'react';
import PrettyRating, { IconsInterface } from "pretty-rating-react";
import {
    faHeart,
    faHeartBroken,
    faStar,
    faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
    faHeart as farHeart,
    faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import { Star } from '@material-ui/icons';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

interface CustomIconsInterface {
    star: IconsInterface;
    heart: IconsInterface;
}

const icons: CustomIconsInterface = {
    star: {
        complete: faStar,
        half: faStarHalfAlt,
        empty: farStar,
    },
    heart: {
        complete: faHeart,
        half: faHeartBroken,
        empty: farHeart,
    },
};

const colors = {
    star: ['#d9ad26', '#d9ad26', '#434b4d'],
    heart: ['#9b111e', '#a83f39'],
};
const Rating : FC<any> = ({ rating, ...props }) => {


    return (
        <div className="absolute inset-x-0 bottom-0 h-16 ml-8" >
            <div className="flex space-x-12 ...">
                <PrettyRating value={rating} icons={icons.heart} colors={colors.heart} max={10} />
            </div>
        </div>
    );
};

export default Rating;