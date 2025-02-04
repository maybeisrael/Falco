import { NextApiRequest, NextApiResponse } from 'next';  // Import missing types
import { MongoClient, Db, Collection } from 'mongodb';

interface User {
    email: string;
    password: string;
}

const uri = process.env.MONGODB_URI || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        console.log('Connecting to MongoDB...');
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const db: Db = client.db('Gunner');
        const collection: Collection<User> = db.collection('users');  // Define the collection type

        const { email, password } = req.body;

        if (!email || !password) {
            console.log('Validation failed: Missing email or password');
            return res.status(400).json({ error: 'Email and password are required' });
        }

        await collection.insertOne({ email, password });

        console.log('User saved successfully!');
        client.close();

        return res.status(201).json({ message: 'User saved successfully' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error saving user:', error);
            return res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
        console.error('Unexpected error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
