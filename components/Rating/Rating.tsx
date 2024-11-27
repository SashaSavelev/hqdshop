'use client';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return i < currentRating ? (
                <FaStar className={cn(styles.filled, styles.star)} onMouseEnter={() => onHover(i + 1)} onMouseLeave={() => onHover(rating)} />
            ) : (
                <CiStar className={cn(styles.empty, styles.star)} onMouseEnter={() => onHover(i + 1)} onMouseLeave={() => onHover(rating)} />
            );
        });
        setRatingArray(updatedArray);
    };

    const onHover = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };
    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
};
