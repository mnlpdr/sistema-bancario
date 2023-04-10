let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const c2 = new Conta('10', 2000);
const c3 = new Conta('11', 4000);
const c4 = new Conta('12', 8000);
const c5 = new Conta('13', 10000);
const c6 = new Conta('14', 100000);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);


console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

let clientes = new Clientes();
let cliente3 = new Cliente("João Silva", "12345678901", 10);
let cliente4 = new Cliente("Maria Souza", "23456789012", 11);
let cliente5 = new Cliente("Pedro Almeida", "34567890123", 12);
let cliente6 = new Cliente("Ana Santos", "45678901234", 13);
let cliente7 = new Cliente("Luiza Costa", "56789012345", 14);

clientes.inserir(cliente3);
clientes.inserir(cliente4);
clientes.inserir(cliente5);
clientes.inserir(cliente6);
clientes.inserir(cliente7);


console.log('Listando clientes:');
console.log(clientes.listar());

console.log('Removendo cliente com CPF 12345678901');
clientes.remover('12345678901');

console.log('Listando clientes após remover:');
console.log(clientes.listar());

console.log('Pesquisando cliente com CPF 987.654.321-01');
console.log(clientes.pesquisar('987.654.321-01'));
