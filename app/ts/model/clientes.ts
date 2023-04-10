class Clientes {
    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
        this._clientes.push(cliente);
    }

    remover(cpf: string): void {
        this._clientes = this._clientes.filter(cliente => cliente.cpf !== cpf);
    }

    listar(): Array<Cliente> {
        return this._clientes;
    }

    pesquisar(cpf: string): Cliente {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
}
