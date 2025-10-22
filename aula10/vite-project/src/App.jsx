import { Form } from './components/Form';

function App() {

 return (

   <div className="flex flex-col items-center justify-center h-screen w-screen">

     <div className="flex flex-col items-center justify-center w-auto py-3">

       <h1 className="text-4xl font-bold">Formulário</h1>

     </div>

     <div className="flex flex-col items-center justify-center h-screen w-auto">

       <Form />

     </div>

   </div>

 );

}

export default App;