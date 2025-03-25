                                       PROJETO APPSRG
DESCRIÇAO:

Esse projeto foi desenvolvido com o propósito de demonstrar minhas habilidades de resolução de problemas e contribuir com soluções para a comunidade onde vivo.

O aplicativo foi criado para atender à necessidade do meu gestor na empresa em que trabalho. Ele precisava de uma ferramenta tanto para dispositivos móveis quanto para desktop, com foco no controle e cadastro de clientes, incluindo informações como nome social, CNPJ e nome fantasia.

Além disso, estou desenvolvendo uma versão desktop do aplicativo que irá sincronizar com o dispositivo móvel, proporcionando mais praticidade e controle sobre as operações da empresa.

Abaixo, seguem os prints das telas do app:


PRINTS DAS TELAS:
Tela Inicial: https://prnt.sc/jqtBaoty0H_C
Tela de Cadastro e Visualização de Clientes Salvos: https://prnt.sc/mni77MilLjP9


IMPLEMENTAÇAO:
Segue codigo abaixo codigo para implementaçao do cadastro de cliente:

 const handleCadastro = async () => {
    if (!cnpj || !razaoSocial || !nomeFantasia || !nomePosto) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      const realm = await getRealmInstance();

      // Metdo para salvar um cliente
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


Tela de Cadastro e Visualização de Clientes Salvos: https://prnt.sc/mni77MilLjP9
Segue abaixo trecho do codigo onde fiz o carregamento dos clientes salvos no banco.

const listarClientes = async () => {
    try {
      const realm = await getRealmInstance();
      const clientesLista = realm.objects<Cliente>("Cliente");
  
      // lista de clientes ja cadastrados
      const clientesSimples = clientesLista.map(cliente => ({
        cnpj: cliente.cnpj,
        NomeFantasia: cliente.NomeFantasia,
        RazaoSocial: cliente.RazaoSocial,
        NomePosto: cliente.NomePosto,
      }));
  
      // metodo para listar e atualizar a tela com os clientes cadastrados
      setClientes(clientesSimples); 
    } catch (error) {
      console.error("Erro ao listar clientes:", error);
    }
  };

  Segue abaixo um trecho do codigo onde fiz a implementaçao da navegaçao entre telas, utilizando abas.
const Tab = createBottomTabNavigator();

const AbaNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home';

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Clientes') {
                        iconName = 'people';
                    } else if (route.name === 'Cacique') {
                        iconName = 'car';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato', 
                tabBarInactiveTintColor: 'gray', 
                tabBarStyle: {
                    backgroundColor: '#2C3E50', 
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Clientes" component={ClientesScreen} />
            
        </Tab.Navigator>
        </NavigationContainer>
    );
}



Todo o projeto foi feito utilizando react native com banco de dados Realm, tendo uma estrategia simples para controle de dados de clientes.
