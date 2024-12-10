import mongoose from "mongoose";

export async function connect() {
    try {
        const db = await mongoose.connect("mongodb+srv://rooot:root@cluster0.whmadnf.mongodb.net/notes");
        console.log(`Connected to MongoDB ${db.connections[0].name}`);
    } catch (error) {
        console.log(error);
    }
}