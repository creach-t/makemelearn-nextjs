// test-credentials.js
require("dotenv").config();
const { Client } = require("pg");

async function testCredentials() {
  console.log("🔍 Variables d'environnement:");
  console.log("DATABASE_URL:", process.env.DATABASE_URL);
  console.log("POSTGRES_PASSWORD:", process.env.POSTGRES_PASSWORD);

  // Test avec l'URL complète
  console.log("\n🧪 Test avec DATABASE_URL...");
  const clientFromURL = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await clientFromURL.connect();
    console.log("✅ Connexion réussie avec DATABASE_URL!");
    const result = await clientFromURL.query(
      "SELECT current_user, current_database()"
    );
    console.log(
      `📊 Connecté en tant que: ${result.rows[0].current_user} sur la DB: ${result.rows[0].current_database}`
    );
  } catch (error) {
    console.log("❌ Échec avec DATABASE_URL:", error.message);
  } finally {
    await clientFromURL.end();
  }

  // Test avec les paramètres individuels
  console.log("\n🧪 Test avec paramètres individuels...");
  const clientIndividual = new Client({
    host: "127.0.0.1",
    port: 5432,
    database: "makemelearn",
    user: "makemelearn_user",
    password: "MakeMeLearn2025!SecurePass",
  });

  try {
    await clientIndividual.connect();
    console.log("✅ Connexion réussie avec paramètres individuels!");
    const result = await clientIndividual.query("SELECT version()");
    console.log(
      `📊 Version PostgreSQL: ${result.rows[0].version.split(" ")[1]}`
    );
  } catch (error) {
    console.log("❌ Échec avec paramètres individuels:", error.message);
  } finally {
    await clientIndividual.end();
  }
}

testCredentials();
