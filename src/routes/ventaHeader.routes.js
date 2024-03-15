import { Router } from "express";

import { getVentasHeader, getVentasHeaderById, createNewVentaH } from "../controllers/ventaheader.controller";

const router =  Router();
//tengo que agregar a la app toda esta ruta 
router.get('/ventaHeader', getVentasHeader);

router.get('/ventaHeader/:id',getVentasHeaderById);

router.post('/ventaHeader',createNewVentaH);
/*
router.put('/ventaHeader',updateVentaHeaderById);
router.get('/ventaHeader/count',getTotalVentasH);
router.delete('/ventaHeader',deleteVentaHeaderById);
*/
export default router;