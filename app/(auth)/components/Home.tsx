'use client';
import React from 'react';
import { FaHouseChimney } from 'react-icons/fa6';
import Link from 'next/link';
import styles from '../auth.module.css'

const Home = () => {
    return (
        <>
            <Link className={styles.home} href="/">             
                <FaHouseChimney />
         <span >На главную</span>
            </Link>
        </>
    );
};

export default Home;
