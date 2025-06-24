import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import connectDB from "./config/db";
import User from "./models/User-model";

const SALT_ROUNDS = 10; // Number of rounds to generate salt. 10 is recommended value

dotenv.config(); // Load environment variables

const users = [
  {
    username: "john_doe",
    email: "john@example.com",
    password: "password123",
    firstName: "John",
    lastName: "Doe",
  },
  {
    username: "jane_doe",
    email: "jane@example.com",
    password: "password456",
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    username: "bob_smith",
    email: "bob@example.com",
    password: "password789",
    firstName: "Bob",
    lastName: "Smith",
  },
  {
    username: "alice_jones",
    email: "alice@example.com",
    password: "password101",
    firstName: "Alice",
    lastName: "Jones",
  },
  {
    username: "charlie_brown",
    email: "charlie@example.com",
    password: "password102",
    firstName: "Charlie",
    lastName: "Brown",
  },
  {
    username: "david_lee",
    email: "david@example.com",
    password: "password103",
    firstName: "David",
    lastName: "Lee",
  },
  {
    username: "emily_clark",
    email: "emily@example.com",
    password: "password104",
    firstName: "Emily",
    lastName: "Clark",
  },
  {
    username: "frank_wright",
    email: "frank@example.com",
    password: "password105",
    firstName: "Frank",
    lastName: "Wright",
  },
  {
    username: "grace_hall",
    email: "grace@example.com",
    password: "password106",
    firstName: "Grace",
    lastName: "Hall",
  },
  {
    username: "henry_adams",
    email: "henry@example.com",
    password: "password107",
    firstName: "Henry",
    lastName: "Adams",
  },
];

async function seedDB() {
  try {
    await connectDB(); // Connect to the database
    await User.deleteMany({});

    // Create users
    const createdUsers = await Promise.all(
      users.map(async (u) => {
        const hashedPassword = await bcrypt.hash(u.password, SALT_ROUNDS); // Hash password
        const user = new User({ ...u, password: hashedPassword }); // Create new user object
        await user.save(); // Save user to database
        return user; // Return the saved user object
      })
    );

    console.log("Database seeded");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
}

seedDB();
