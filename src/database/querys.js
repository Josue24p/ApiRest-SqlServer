export const queries = {
    getAllClient: 'SELECT * FROM CLIENTES',
    addNewClient: 
    'INSERT INTO CLIENTES (NroDocumento, ApellidosNombres, FechaHoraRegistro) VALUES (@NroDocumento, @ApellidosNombres, @FechaHoraRegistro)',
    getClientById: 'SELECT * FROM CLIENTES WHERE IdCliente = @Id',
    deleteClientById: 'DELETE FROM CLIENTES WHERE IdCliente = @Id',
    getTotalClients: 'SELECT COUNT(*) FROM CLIENTES',
    updateCliente: 
    'UPDATE CLIENTES SET NroDocumento = @NroDocumento, ApellidosNombres = @ApellidosNombres, FechaHoraRegistro = @FechaHoraRegistro WHERE IdCliente = @Id',
}