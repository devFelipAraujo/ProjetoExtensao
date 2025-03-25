import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import { ClienteInstance } from '../Data/ClienteInstance';

function CadastroScreen() {
  const [cnpj, setCnpj] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState<string>('');
  const [razaoSocial, setRazaoSocial] = useState<string>('');
  const [nomePosto, setNomePosto] = useState<string>('');

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
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
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
  },
});

export default CadastroScreen;