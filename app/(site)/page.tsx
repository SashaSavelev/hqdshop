// 'use client';

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import styles from './page.module.css';
// import Link from 'next/link';
import Image from 'next/image';
import Input from './components/Input/Input';
import { Logout } from './components/Logout/Logout';
import { auth } from '@/app/auth';

export default async function Products() {

    const session = await auth();

    return (
        <div>
         
            <Input></Input>
            <div>
                <p>{session?.user?.email}</p>
                {session?.user && <Image src={session?.user?.image} width={50} height={50} alt={session?.user?.name} />}
                <Logout />
            </div>
        </div>
    );
}
