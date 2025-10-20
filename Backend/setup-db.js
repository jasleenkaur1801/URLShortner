import connectionPool from "./src/config/db.js";

async function createTables() {
    try {
        // Create links table
        await connectionPool.query(`
            CREATE TABLE IF NOT EXISTS links (
                id SERIAL PRIMARY KEY,
                code VARCHAR(10) UNIQUE NOT NULL,
                url TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                expires_at TIMESTAMP NULL
            );
        `);

        console.log("✅ Database tables created successfully!");

        // Check if table exists
        const { rows } = await connectionPool.query(
            "SELECT table_name FROM information_schema.tables WHERE table_name = 'links'"
        );

        if (rows.length > 0) {
            console.log("✅ Links table exists and is ready!");
        } else {
            console.log("❌ Failed to create links table");
        }

    } catch (error) {
        console.error("❌ Error creating tables:", error);
    } finally {
        await connectionPool.end();
    }
}

createTables();
