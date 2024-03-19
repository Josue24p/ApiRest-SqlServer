export const queries = {
    getAllVentasH: 'Select * from VentaHeader',
    newVentasH: 
    'Insert into VentaHeader (SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total) VALUES(@SerieNumero,@FechaHora,@IdCliente,@Subtotal,@IGV,@Total)',
    getVentaHById: 'SELECT * FROM VENTAHEADER WHERE IdVentaH = @Id',
    deleteVentaHById: 'Delete from VentaHeader where IdVentaH = @Id',
    getTotalVentaH: 'Select count(*) from VentaHeader',
    updateVentaH: 
    'UPDATE VENTAHEADER SET SerieNumero=@SerieNumero,FechaHora=@FechaHora,IdCliente=@IdCliente, Subtotal=@Subtotal, IGV=@IGV, Total=@Total WHERE IdVentaH=@Id',
    getAllClient: 'SELECT * FROM CLIENTES',
    addNewClient: 
    'INSERT INTO CLIENTES (NroDocumento, ApellidosNombres, FechaHoraRegistro) VALUES (@NroDocumento, @ApellidosNombres, @FechaHoraRegistro)',
    getClientById: 'SELECT * FROM CLIENTES WHERE IdCliente = @Id',
    deleteClientById: 'DELETE FROM CLIENTES WHERE IdCliente = @Id',
    getTotalClients: 'SELECT COUNT(*) FROM CLIENTES',
    updateCliente: 
    'UPDATE CLIENTES SET NroDocumento = @NroDocumento, ApellidosNombres = @ApellidosNombres, FechaHoraRegistro = @FechaHoraRegistro WHERE IdCliente = @Id',
}
