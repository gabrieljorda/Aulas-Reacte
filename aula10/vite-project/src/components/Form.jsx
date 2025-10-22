import React, { useState } from 'react';

import { Button } from './Button';

import api from '../server/api';

export const Form = () => {

 const [formData, setFormData] = useState({

   name: '',

   email: '',

   message: '',

 });

 async function handleSubmit(e) {

   e.preventDefault();

   const { name, email, message } = formData;

   try {

     const response = await api.post('/form-data', {

       name,

       email,

       message,

     });

     alert('Formulário enviado com sucesso!');

     console.log(response.data);

     setFormData({

       name: '',

       email: '',

       message: '',

     });

   } catch (error) {

     console.log(error);

   }

 }

 return (

   <div className="flex flex-col items-center justify-center w-screen border-red-500">

     <form

       className="md:w-[50%] w-fit mx-auto bg-zinc-900 p-8 rounded-lg shadow-lg"

       onSubmit={handleSubmit}

     >

       <h2 className="text-2xl font-semibold text-zinc-100 mb-6 text-center">

         Formulário de Contato

       </h2>

       <div className="mb-4">

         <label className="block text-sm font-medium text-zinc-200">

           Nome

         </label>

         <input

           type="text"

           id="nome"

           name="name"

           onChange={(e) => setFormData({ ...formData, name: e.target.value })}

           placeholder="Digite seu nome"

           className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

           required

         />

       </div>

       <div className="mb-4">

         <label className="block text-sm font-medium text-zinc-200">

           E-mail

         </label>

         <input

           type="email"

           id="email"

           name="email"

           onChange={(e) =>

             setFormData({ ...formData, email: e.target.value })

           }

           placeholder="Digite seu e-mail"

           className="w-full px-4 py-2 mt-1 border text-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

           required

         />

       </div>

       <div className="mb-4">

         <label className="block text-sm font-medium text-zinc-200">

           Mensagem

         </label>

         <textarea

           id="mensagem"

           name="message"

           onChange={(e) =>

             setFormData({ ...formData, message: e.target.value })

           }

           placeholder="Escreva sua mensagem"

           className="w-full px-4 py-2 mt-1 border text-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

           required

         ></textarea>

       </div>

       <div className="flex justify-center">

         <Button type="submit" text={'Enviar'} />

       </div>

     </form>

   </div>

 );

};