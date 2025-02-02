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

        const db = client.db('Gunner'); // Make sure this matches your database name
        const collection = db.collection('pass'); // Make sure this matches your collection name

        const { email, password } = req.body;

        if (!email || !password) {
            console.log('Validation failed: Missing email or password');
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Insert user data
        await collection.insertOne({ email, password });

        console.log('User saved successfully!');
        client.close();

        return res.status(201).json({ message: 'User saved successfully' });
    } catch (error: any) { // Cast error to 'any'
        console.error('Error saving user:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
