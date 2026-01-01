import { config } from "dotenv";
import { MongoClient, Db } from "mongodb";
config();

const client = new MongoClient(process.env.DB_MONGO);

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */

export async function connect() {
    try {
        await client.connect();
        db = client.db("start_mongo");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
}

export function getDB() {
    if (!db) {
        throw new Error("db not exist");
    }
    return db;
}