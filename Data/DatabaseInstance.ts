import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "Cliente.db";

export const getDbConnection = async () => {
  try {
    console.log("Tentando abrir o banco de dados...");
    
    const db = await SQLite.openDatabase({
      name: database_name,
      location: 'default',
    });

    if (!db) {
      throw new Error("Falha ao abrir o banco de dados. `db` retornou null.");
    }

    console.log("Banco de dados aberto com sucesso!");
    return db;
  } catch (error) {
    console.error("Erro ao abrir o banco de dados:", error);
    throw error;
  }
};
