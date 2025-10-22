export async function getFormDataService() {

 const formData = await prisma.formData.findMany();

 return formData;

}

export async function createFormDataService(formData) {

 const newFormData = await prisma.formData.create({

   data: formData,

 });

 return newFormData;

}

export async function updateFormDataService(id, formData) {

 const updatedFormData = await prisma.formData.update({

   where: { id },

   data: formData,

 });

 return updatedFormData;

}

export async function deleteFormDataService(id) {

 const deletedFormData = await prisma.formData.delete({

   where: { id },

 });

 return deletedFormData;

}
