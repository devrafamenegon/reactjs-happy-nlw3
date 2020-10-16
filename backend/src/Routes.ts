import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/Upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// MVC

// Models --> banco de dados
// Views -> maneira que irá mostrar isso
// Controllers -> controle de rotas


routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);


export default routes;