
import { getConnection, sql, queries } from '../database'


export const getClientes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllClient);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const createNewClient = async (req, res) => {

    const { NroDocumento, ApellidosNombres, FechaHoraRegistro } = req.body
    //let { FechaHoraRegistro } = req.body

    //const currentDate = new Date();
    //const isoDate = currentDate.toISOString(); // da formato a la fecha yyyy--mm-dd / sin el slice sale con hora completa


    if (NroDocumento == null || ApellidosNombres == null || FechaHoraRegistro == null) {
        return res.status(400).json({ msg: 'Bad Request. Por favor llena todos los campos' })
    }
    /*if (FechaHoraRegistro == null) {
        FechaHoraRegistro = isoDate;
    };*/
    //console.log(NroDocumento,ApellidosNombres,FechaHoraRegistro)
    try {
        const pool = await getConnection();

        await pool.request()
            .input("NroDocumento", sql.VarChar, NroDocumento)
            .input('ApellidosNombres', sql.VarChar, ApellidosNombres)
            .input('FechaHoraRegistro', sql.DateTime, FechaHoraRegistro)
            .query(queries.addNewClient)
        console.log(NroDocumento, ApellidosNombres, FechaHoraRegistro)
        res.json({ NroDocumento, ApellidosNombres, FechaHoraRegistro });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getClientById = async  (req, res) => {
    
    const {id} = req.params

    const pool = await getConnection();
    
    const result = await pool
    .request()
    .input("Id",id)
    .query(queries.getClientById)
    //console.log(result)
    res.send(result.recordset[0]);
}

export const deleteClientById = async  (req, res) => {
    
    const {id} = req.params;

    const pool = await getConnection();
    
    const result = await pool
    .request()
    .input("Id",id)
    .query(queries.deleteClientById)
    //console.log(result)
    //res.send(result);
    res.sendStatus(204);
};

export const getTotalClients = async  (req, res) => {
    
    const pool = await getConnection();
    
    const result = await pool
    .request()
    .query(queries.getTotalClients)
    console.log(result)
    //res.send(result);
    res.json(result.recordset[0][''])
};

export const updateClientById = async  (req, res) => {
    
    const {NroDocumento,ApellidosNombres, FechaHoraRegistro} = req.body
    const {id} =  req.params;

    if (NroDocumento == null || ApellidosNombres == null || FechaHoraRegistro === null)  {
        return res.status(400).json({ msg: 'Bad Request. Por favor llena todos los campos' })
    }
    try {
    const pool = await getConnection()
    const result =  await pool
    .request()
    .input('id',sql.Int,id)
    .input("NroDocumento", sql.VarChar, NroDocumento)
    .input('ApellidosNombres', sql.VarChar, ApellidosNombres)
    .input('FechaHoraRegistro', sql.DateTime, FechaHoraRegistro)
    .query(queries.updateCliente)
    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    res.json({ NroDocumento, ApellidosNombres, FechaHoraRegistro });
} catch (error) {
    res.status(500);
    res.send(error.message);
  }
};