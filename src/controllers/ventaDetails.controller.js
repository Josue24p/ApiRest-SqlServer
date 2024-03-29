//Primero llamamos o importamos a la conexi├│n de la BD, tambi├®n la librer├¡a Sql 
//para poder realizar  consultas y manipular el lenguaje SQL
import { getConnection, queries, sql } from "../database";

//Primero creamos la funci├│n para poder conseguir los datos de la tabla VENTADETAILS
export const getVentaDetails = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllVentasD);
        res.json(result.recordset);
        console.log(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//Ahora creamos los datos para poder conseguir  una venta en espec├¡fico por su ID
export const getVentasDetailsById = async (req,res) =>{
    const {id} = req.params;

    const pool = await getConnection();
    
    const result = await pool
    .request()
    .input('Id',id)
    .query(queries.getVentaDById)
    console.log(result)
    res.send(result.recordset[0])
}

export const createNewVentaD = async (req,res) => {
    //variables que ser├ín ingresadas por el cliente el body.
    const {IdVentaH,Linea,Codigo,Descripcion,Total} = req.body;

    if (IdVentaH == null || Linea == null 
        || Codigo == null || Descripcion == null ||
        Total == null) {
        return res.status(400).json({msg: 'Petici├│n fallida. Por favor llena todos los campos'})
    }
    try {
        const pool = await getConnection();
        //Se inserta el registro
        await pool
        .request()
        .input("IdVentaH",sql.Int,IdVentaH)
        .input("Linea",sql.Int,Linea)
        .input("Codigo",sql.VarChar,Codigo)
        .input("Descripcion",sql.VarChar,Descripcion)
        .input("Total",sql.Decimal,Total)
        .query(queries.newVentasD)
        //Para poder probar y ver los datos en consola que se enviaran a la base de datos
        console.log(IdVentaH,Linea,Codigo,Descripcion,Total)
        res.json({IdVentaH,Linea,Codigo,Descripcion,Total}); //lo que quiero mostrar de json de respuesta en postman
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const getTotalVentasD = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool.request().query(queries.getTotalVentaD);
        console.log(result)
        res.sendStatus(204);
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
    
}

export const deleteVentaDetailById = async  (req,res) =>{

    const {id} = req.params;

    const pool = await getConnection();

    const result = await pool
    .request()
    .input("Id",id)
    .query(queries.deleteVentaDById)
    //console.log(result)
    res.sendStatus(204);
}

export const updateVentaDetailsById = async  (req,res)=>{
    const {id} = req.params;
    const {IdVentaH,Linea,Codigo,Descripcion,Total} = req.body;
    if (IdVentaH == null || Linea == null 
        || Codigo == null || Descripcion == null ||
        Total == null) {
        return res.status(400).json({msg: 'Petici├│n fallida. Por favor llena todos los campos'})
    }
    try {
        const pool = await getConnection();
        await pool
        .request()
        .input('id',sql.Int,id)
        .input("IdVentaH",sql.Int,IdVentaH)
        .input("Linea",sql.Int,Linea)
        .input("Codigo",sql.VarChar,Codigo)
        .input("Descripcion",sql.VarChar,Descripcion)
        .input("Total",sql.Decimal,Total)
        .query(queries.updateVentaD)

        res.json({IdVentaH,Linea,Codigo,Descripcion,Total})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
