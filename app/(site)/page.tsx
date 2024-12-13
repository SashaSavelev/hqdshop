// 'use client';

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import styles from './page.module.css';
// import Link from 'next/link';
import Image from 'next/image';
import Input from './components/Input/Input';
import { Logout } from './components/Logout/Logout';
import { auth } from '@/auth';
import Products from './components/Products/Products';
// import { getDataFromToken } from '../lib/getDataFromToken';
import { FaUserAlt } from "react-icons/fa";

export default async function Main() {

    const session = await auth();
  
    return (
        <main>
         
            <Input></Input>
            <div>
                <p>{JSON.stringify(session?.user)}</p>
                {session?.user?.image ? <Image src={session?.user?.image} width={50} height={50} alt={session?.user?.name}/> : <FaUserAlt />
            }
                <Logout />
              <Products/>
            </div>
        </main>
    );
}
