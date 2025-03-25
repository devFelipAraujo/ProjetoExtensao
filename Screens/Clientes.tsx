import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { getRealmInstance, Cliente } from "../Data/DatabaseInstance";

const ClientesScreen = () => {
  const [cnpj, setCnpj] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [nomePosto, setNomePosto] = useState("");
  const [clientes, setClientes] = useState<Cliente[]>([]);

  
  const handleCadastro = async () => {
    if (!cnpj || !razaoSocial || !nomeFantasia || !nomePosto) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      const realm = await getRealmInstance();

      realm.write(() => {
        realm.create("Cliente", {
          cnpj: cnpj, 
          RazaoSocial: razaoSocial,
          NomeFantasia: nomeFantasia,
          NomePosto: nomePosto,
        });
      });

      Alert.alert("Sucesso", "Cliente cadastrado com sucesso!");
      listarClientes(); 
      setCnpj("");
      setRazaoSocial("");
      setNomeFantasia("");
      setNomePosto("");
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
      Alert.alert("Erro ao salvar cliente");
    }
  };

  
  const listarClientes = async () => {
    try {
      const realm = await getRealmInstance();
      const clientesLista = realm.objects<Cliente>("Cliente");
      setClientes([...clientesLista]); 
    } catch (error) {
      console.error("Erro ao listar clientes:", error);
    }
  };

  
  useEffect(() => {
    listarClientes();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Clientes</Text>

      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome Fantasia"
        value={nomeFantasia}
        onChangeText={setNomeFantasia}
      />
      <TextInput
        style={styles.input}
        placeholder="Razão Social"
        value={razaoSocial}
        onChangeText={setRazaoSocial}
      />
      <TextInput
        style={styles.input}
        placeholder="Posto Afiliado"
        value={nomePosto}
        onChangeText={setNomePosto}
      />

      <Button title="Cadastrar Cliente" onPress={handleCadastro} />

      <Text style={styles.sectionTitle}>Clientes Cadastrados:</Text>
      {clientes.length > 0 ? (
        clientes.map((cliente) => (
          <View key={cliente.cnpj} style={styles.clienteContainer}>
            <Text style={styles.clienteText}>
              <Text style={{ fontWeight: "bold" }}>CNPJ:</Text> {cliente.cnpj}
            </Text>
            <Text style={styles.clienteText}>
              <Text style={{ fontWeight: "bold" }}>Nome Fantasia:</Text>{" "}
              {cliente.NomeFantasia}
            </Text>
            <Text style={styles.clienteText}>
              <Text style={{ fontWeight: "bold" }}>Razão Social:</Text>{" "}
              {cliente.RazaoSocial}
            </Text>
            <Text style={styles.clienteText}>
              <Text style={{ fontWeight: "bold" }}>Posto Afiliado:</Text>{" "}
              {cliente.NomePosto}
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.noClientes}>Nenhum cliente cadastrado.</Text>
      )}
    </ScrollView>
  );
};

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#2C3E50",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "80%",
    backgroundColor: "#FFFFFF",
    color: "#333",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 20,
    textAlign: "center",
  },
  clienteContainer: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: "80%",
  },
  clienteText: {
    fontSize: 16,
    color: "#333",
  },
  noClientes: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default ClientesScreen;
