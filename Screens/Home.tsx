import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="home" size={48} color="#007AFF" />
                <Text style={styles.title}>Bem-vindo ao App</Text>
                <Text style={styles.description}>Escolha uma das opções abaixo:</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Serviços</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.button}>
                            <Icon name="line-chart" size={24} color="#FFFFFF" style={styles.icon} />
                            <Text style={styles.buttonText}>BI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Icon name="credit-card" size={24} color="#FFFFFF" style={styles.icon} />
                            <Text style={styles.buttonText}>TEF</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.button}>
                            <Icon name="tablet" size={24} color="#FFFFFF" style={styles.icon} />
                            <Text style={styles.buttonText}>POS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Icon name="cogs" size={24} color="#FFFFFF" style={styles.icon} />
                            <Text style={styles.buttonText}>MetaSmart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Postos</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.button}>
                            <Icon name="car" size={24} color="#FFFFFF" style={styles.icon} />
                            <Text onPress={() => navigation.navigate('Rede Cacique')} style={styles.buttonText}>POSTOS CACIQUE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Icon name="car" size={24} color="#FFFFFF" style={styles.icon} />
                            <Text style={styles.buttonText}>POSTOS PIONEIRO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.button}>
                            <Icon name="car" size={24} color="#FFFFFF" style={styles.icon} />
                            <Text style={styles.buttonText}>POSTOS TERESINA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Icon name="car" size={24} color="#FFFFFF" style={styles.icon}  />
                            <Text style={styles.buttonText}>POSTOS LUCIANA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.button}>
                            <Icon name="car" size={24} color="#FFFFFF" style={styles.icon} />
                            <Text style={styles.buttonText}>POSTO CHE</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2C3E50', // Cor de fundo moderna
    },
    header: {
        alignItems: 'center',
        marginTop: 40, // Ajuste a margem superior conforme necessário
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
        textAlign: 'center',
    },
    buttonsContainer: {
        justifyContent: 'center', // Centraliza verticalmente os botões no contêiner
    },
    row: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    button: {
        width: 150, // Tamanho do botão
        height: 60, // Altura do botão
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, // Bordas arredondadas
        margin: 10, // Espaçamento entre os botões
        flexDirection: 'row', // Para alinhar ícone e texto horizontalmente
    },
    icon: {
        marginRight: 10, // Espaçamento entre o ícone e o texto
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default HomeScreen;
