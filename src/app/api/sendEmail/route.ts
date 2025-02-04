import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// Load the MongoDB URI from environment variables
const uri = process.env.MONGODB_URI || '';

// Handle missing or invalid MongoDB URI
if (!uri) {
  console.error('MongoDB URI is missing or incorrect.');
}

export async function POST(request: Request) {
  try {
    // Check if the URI is valid and log it (for debugging)
    if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
      console.error('Invalid MongoDB URI:', uri);
      return NextResponse.json({ error: 'Internal Server Error: Invalid MongoDB URI' }, { status: 500 });
    }
    
    console.log('Connecting to MongoDB...');
    const client = new MongoClient(uri);
    await client.connect();
    console.log('Connected successfully to MongoDB');

    const db = client.db('Gunner'); // Your database name
    const collection = db.collection('users'); // Your collection

    // Parse the body of the request
    const body = await request.json();
    const { email, password } = body;

    // Validate the request body
    if (!email || !password) {
      console.log('Validation failed: Missing required fields');
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Insert the email and password into the database
    await collection.insertOne({ email, password });

    console.log('User data inserted successfully!');
    await client.close();

    // Return a success response
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
