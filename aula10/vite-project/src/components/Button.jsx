import React from 'react';

export const Button = ({ text, type }) => {

 return (

   <>

     <div>

       <button

         type={type}

         className="bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-800"

       >

         {text}

       </button>

     </div>

   </>

 );

};

 