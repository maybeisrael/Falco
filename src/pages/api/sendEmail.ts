import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        console.log('Connecting to MongoDB...');
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const db = client.db('Gunner'); // Your database name
        const collection = db.collection('users'); // Assuming you are storing user data here

        const { email, password } = req.body;

        if (!email || !password) {
            console.log('Validation failed: Missing required fields');
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Insert the email and password into the database
        await collection.insertOne({ email, password });

        console.log('User data inserted successfully!');
        client.close();

        return res.status(200).json({ message: 'User data saved successfully' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error handling user data request:', error);
            return res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
        console.error('Unexpected error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
