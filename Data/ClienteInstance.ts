import { getDbConnection } from './DatabaseInstance';
import { Cliente } from '../Model/Cliente';

const sqlCreate =
  'create table if not exists Cliente(' +
  'Id integer primary key,' +
  'cnpj integer, RazaoSocial varchar(255), NomeFantasia varchar(255), NomePosto varchar(255))';
const sqlInsert =
  'insert into Cliente (cnpj, RazaoSocial, NomeFantasia, NomePosto)' +
  'values (?, ?, ?, ?)';
const sqlSelectByPosto = 'select * from Cliente where NomePosto = ?';
const sqlDelete = 'delete from Cliente where Id = ?';

export class ClienteInstance {
  constructor() {
    this.criarBanco();
  }

  async criarBanco() {
    const db = await getDbConnection();
    db.transaction(txn => {
      txn.executeSql(sqlCreate, [], () => {
        console.log('Tabela criada com sucesso');
      }, (txn, error) => {
        console.error('Erro ao criar tabela:', error);
        return true; 
      });
    });
  }

  async SalvarCliente(cliente: Cliente) {
    if (!cliente.cnpj || !cliente.RazaoSocial || !cliente.NomeFantasia || !cliente.NomePosto) {
      throw new Error('Dados do cliente incompletos');
    }

    const db = await getDbConnection();
    db.transaction(txn => {
      txn.executeSql(sqlInsert, [cliente.cnpj, cliente.RazaoSocial, cliente.NomeFantasia, cliente.NomePosto], () => {
        console.log('Cliente salvo com sucesso');
      }, (txn, error) => {
        console.error('Erro ao salvar cliente:', error);
        return true; 
      });
    });
  }

  async  listarClientesPorPosto(NomePosto: string): Promise<Cliente[]>{
    const db = await getDbConnection();

    return new Promise((resolve, reject) => {
      db.transaction(txn => {
        txn.executeSql(
          sqlSelectByPosto,
          [NomePosto],
          (_, results) => {
            const clientes: Cliente[] = [];
            for(let i = 0; i < results.rows.length; i++){
              clientes.push(results.rows.item(i));
            }
            resolve(clientes);
          },
          (_, error) =>  {
            console.error('Erro ao listar clientes' + error);
            reject(error);
            return true;
          }
        );
      });
    });
  }

  async excluirCliente(id: number) {
    const db = await getDbConnection();
    db.transaction(txn => {
      txn.executeSql(sqlDelete, [id], () => {
        console.log('Cliente excluído com sucesso');
      }, (txn, error) => {
        console.error('Erro ao excluir cliente:', error);
        return true; 
      });
    });
  }
}

export default ClienteInstance;