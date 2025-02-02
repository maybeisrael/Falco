import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string; // Ensure you have this in .env.local
const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    await client.connect();
    const db = client.db("Gunner"); // Replace with your database name
    const usersCollection = db.collection("users");

    const newUser = { email, password, createdAt: new Date() };
    await usersCollection.insertOne(newUser);

    res.status(201).json({ success: true, message: "User saved successfully!" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
}
