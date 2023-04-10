class ClienteEspecial extends Cliente {
    
    private dependentes: Array<Cliente>;
    
    listar(): Array<Cliente> {
        return this.dependentes;
    }
    
}