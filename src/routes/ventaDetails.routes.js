//Se importa router de la librer├¡a express
import { Router } from "express";
//importamos las funciones que tiene VentaDetailsController
import { getVentaDetails, getVentasDetailsById, createNewVentaD, getTotalVentasD,deleteVentaDetailById,updateVentaDetailsById}from "../controllers/ventaDetails.controller";
//declaramos una constante router que tendra todas las funcionalidades de router
const router =  Router();
//tengo que agregar a la app toda esta ruta 
router.get('/ventaDetails', getVentaDetails);

router.get('/ventaDetails/:id',getVentasDetailsById);

router.post('/ventaDetails',createNewVentaD);

router.get('/ventaDetails/count',getTotalVentasD);

router.delete('/ventaDetails/:id',deleteVentaDetailById);

router.put('/ventaDetails/:id',updateVentaDetailsById)

export default router
