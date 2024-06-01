export const queries = {
    //Consultas SQL para tabla CLIENTES
    getAllClient: 'SELECT * FROM CLIENTES',
    addNewClient: 
    'INSERT INTO CLIENTES (NroDocumento, ApellidosNombres, FechaHoraRegistro) VALUES (@NroDocumento, @ApellidosNombres, @FechaHoraRegistro)',
    getClientById: 'SELECT * FROM CLIENTES WHERE IdCliente = @Id',
    deleteClientById: 'DELETE FROM CLIENTES WHERE IdCliente = @Id',
    getTotalClients: 'SELECT COUNT(*) FROM CLIENTES',
    updateCliente: 
    'UPDATE CLIENTES SET NroDocumento = @NroDocumento, ApellidosNombres = @ApellidosNombres, FechaHoraRegistro = @FechaHoraRegistro WHERE IdCliente = @Id',
    ///Consultas SQL para tabla VentaHeader
    getAllVentasH: 'Select * from VentaHeader',
    newVentasH: 
    'Insert into VentaHeader (SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total) VALUES(@SerieNumero,@FechaHora,@IdCliente,@Subtotal,@IGV,@Total)',
    getVentaHById: 'SELECT * FROM VENTAHEADER WHERE IdVentaH = @Id',
    deleteVentaHById: 'Delete from VentaHeader where IdVentaH = @Id',
    getTotalVentaH: 'Select count(*) from VentaHeader',
    updateVentaH: 
    'UPDATE VENTAHEADER SET SerieNumero=@SerieNumero,FechaHora=@FechaHora,IdCliente=@IdCliente, Subtotal=@Subtotal, IGV=@IGV, Total=@Total WHERE IdVentaH=@Id',
    //Consulta SQL para tabla VentaDetails
    getAllVentasD: 'Select * from VentaDetails',
    newVentasD:
    'Insert into VentaDetails (IdVentaH,Linea,Codigo,Descripcion,Total) VALUES (@IdventaH, @Linea, @Codigo, @Descripcion, @Total)',
    getVentaDById: 'Select * From VentaDetails Where IdVentaD = @Id',
    deleteVentaDById: 'Delete From VentaDetails Where IdVentaD=@Id',
    getTotalVentaD: 'Select count(*) from VentaDetails',
    updateVentaD:
    'Update VentaDetails set IdVentaH=@IdventaH,Linea=@Linea,Codigo=@Codigo,Descripcion=@Descripcion,Total=@Total Where IdVentaD=@Id',
}