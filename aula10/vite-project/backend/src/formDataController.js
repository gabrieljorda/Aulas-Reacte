
import {

 createFormDataService,

 getFormDataService,

 updateFormDataService,

 deleteFormDataService,

} from '../service/formDataService.js';

export async function getFormDataController() {

 const formData = await getFormDataService();

 if (!formData) {

   return { status: 404, message: 'No data found' };

 }

 return { status: 200, data: formData };

}

export async function createFormDataController(request, reply) {

 const formData = request.body;

 const newFormData = await createFormDataService(formData);

 if (!newFormData) {

   return { status: 400, message: 'Error creating form data' };

 }

 return reply.status(201).send(newFormData);

}

export async function updateFormDataController(request, reply) {

 const { id } = request.params;

 const idToNumber = Number(id);

 if (!idToNumber) {

   return reply.status(400).send({ message: 'Invalid id' });

 }

 const formData = request.body;

 const updatedFormData = await updateFormDataService(idToNumber, formData);

 if (!updatedFormData) {

   return reply.status(400).send({ message: 'Error updating form data' });

 }

 return reply.status(200).send(updatedFormData);

}

export async function deleteFormDataController(request, reply) {

 const { id } = request.params;

 const idToNumber = Number(id);

 if (!idToNumber) {

   return reply.status(400).send({ message: 'Invalid id' });

 }

 const deletedFormData = await deleteFormDataService(idToNumber);

 if (!deletedFormData) {

   return reply.status(400).send({ message: 'Error deleting form data' });

 }

 return reply.status(200).send({ message: 'Form data deleted' });

}