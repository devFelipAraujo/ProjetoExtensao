import Realm from "realm";

// Definindo a classe Cliente
class Cliente extends Realm.Object<Cliente> {
  cnpj!: string;
  RazaoSocial!: string;
  NomeFantasia!: string;
  NomePosto!: string;

  static schema: Realm.ObjectSchema = {
    name: "Cliente",
    properties: {
      cnpj: "string",
      RazaoSocial: "string",
      NomeFantasia: "string",
      NomePosto: "string",
    },
    primaryKey: "cnpj",
  };
}


 const getRealmInstance = async (): Promise<Realm> => {
  try {
    console.log("Tentando abrir o banco de dados Realm...");
    
    const realm = await Realm.open({
      schema: [Cliente], 
      schemaVersion: 1,  
    });

    console.log("Banco de dados Realm aberto com sucesso!");
    return realm;
  } catch (error) {
    console.error("Erro ao abrir o banco de dados Realm:", error);
    throw error;
  }
};


export { Cliente, getRealmInstance };
