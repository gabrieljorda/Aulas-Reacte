import {

 createFormDataController,

 getFormDataController,

 updateFormDataController,

 deleteFormDataController,

} from './controller/formDataController.js';

export default function routes(app) {

 app.get('/form-data', getFormDataController);

 app.post('/form-data', createFormDataController);

 app.put('/form-data/:id', updateFormDataController);

 app.delete('/form-data/:id', deleteFormDataController);

}