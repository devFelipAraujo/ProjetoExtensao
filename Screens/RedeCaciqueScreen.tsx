import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert, RefreshControl } from 'react-native';
import { ClienteInstance } from '../Data/ClienteInstance';
import { Cliente } from '../Model/Cliente';
import { getDbConnection } from '../Data/DatabaseInstance';


const RedeCaciqueScreen = ({ navigation }: { navigation: any }) => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const clienteInstance = new ClienteInstance(); 

  
  const fetchClientes = useCallback(async () => {
    setRefreshing(true);
    try {
      const clientes = await clienteInstance.listarClientesPorPosto('Rede Cacique');
      setClientes(clientes);
    } catch (error) {
      console.error('Erro ao listar clientes:', error);
      Alert.alert('Erro', 'Não foi possível carregar os clientes.');
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchClientes();
  }, [fetchClientes]);

  
  const handleExcluir = async (id: number) => {
    try {
      await clienteInstance.excluirCliente(id);
      Alert.alert('Sucesso', 'Cliente excluído com sucesso');
      fetchClientes(); 
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      Alert.alert('Erro', 'Não foi possível excluir o cliente.');
    }
  };

  // ✅ Renderiza cada cliente na lista
  const renderItem = ({ item }: { item: Cliente }) => (
    <View style={styles.clienteContainer}>
      <Text style={styles.clienteText}>CNPJ: {item.cnpj}</Text>
      <Text style={styles.clienteText}>Razão Social: {item.RazaoSocial}</Text>
      <Text style={styles.clienteText}>Nome Fantasia: {item.NomeFantasia}</Text>
      <Text style={styles.clienteText}>Posto: {item.NomePosto}</Text>
      <Button title="Excluir" color="red" onPress={() => handleExcluir(item.Id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Postos Rede Cacique</Text>
      <FlatList
        data={clientes}
        renderItem={renderItem}
        keyExtractor={item => item.Id.toString()}
        ListEmptyComponent={<Text style={styles.noClientes}>Nenhum cliente encontrado</Text>}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchClientes} />} // ✅ Atualiza ao puxar
      />
    </View>
  );
};

// ✅ Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  clienteContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  },
  clienteText: {
    fontSize: 16,
    marginBottom: 5,
  },
  noClientes: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default RedeCaciqueScreen;
