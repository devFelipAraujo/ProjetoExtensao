import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import { ClienteInstance } from '../Data/ClienteInstance';

const ClientesScreen = () => {
  const [cnpj, setCnpj] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomePosto, setNomePosto] = useState('');

  const handleCadastro = () => {
    const cliente = { cnpj: Number(cnpj), RazaoSocial: razaoSocial, NomeFantasia: nomeFantasia, NomePosto: nomePosto };
    console.log('Cliente a ser salvo:', cliente);
    try {
      const clienteInstance = new ClienteInstance();
      clienteInstance.SalvarCliente(cliente);
      Alert.alert('Cliente salvo com sucesso');
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
      Alert.alert('Ocorreu um erro' + error);
    }
  };

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
      <Button title="Cadastrar" onPress={handleCadastro} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#2C3E50', // Cor de fundo moderna
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
    backgroundColor: '#FFFFFF',
    color: '#333',
  },
  section: {
    marginBottom: 20,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  clienteContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  clienteText: {
    fontSize: 16,
    color: '#333',
  },
  noClientes: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default ClientesScreen;