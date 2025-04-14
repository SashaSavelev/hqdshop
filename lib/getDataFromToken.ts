import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies;
        console.log(token, 'TOKEN!!!');
    } catch (error) {
        console.log(error)
    }
};
