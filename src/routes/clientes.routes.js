import { Router } from 'express';

import { getClientes, createNewClient, getClientById, deleteClientById, getTotalClients, updateClientById} from '../controllers/clientes.controller';

const router = Router();

router.get('/clientes',getClientes);

router.post('/clientes',createNewClient);

router.get('/clientes/count',getTotalClients);

router.get('/clientes/:id',getClientById);

router.delete('/clientes/:id', deleteClientById);

router.put('/clientes/:id',updateClientById);


export default router;