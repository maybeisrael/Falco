import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';

export async function POST(request: Request) {
    if (request.method !== 'POST') {
        return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
    }

    try {
        console.log('Connecting to MongoDB...');
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const db = client.db('Gunner'); // Your database name
        const collection = db.collection('users'); // Assuming you are storing user data here

        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            console.log('Validation failed: Missing required fields');
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        // Insert the email and password into the database
        await collection.insertOne({ email, password });

        console.log('User data inserted successfully!');
        client.close();

        return NextResponse.json({ message: 'User data saved successfully' }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error handling user data request:', error);
            return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
        }
        console.error('Unexpected error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
