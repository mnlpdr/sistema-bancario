class ClienteEspecial extends Cliente {
    dependentes;
    listar() {
        return this.dependentes;
    }
}
