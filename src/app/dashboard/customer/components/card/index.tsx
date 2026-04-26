import { Mail } from "@deemlol/next-icons"
import { Phone } from "@deemlol/next-icons"
export function CardCustomer(){
  return(
    <article className="flex flex-col shadow-md border-l-2 border-l-blue-400 bg-gray-100 p-3 rounded-lg hover:scale-101 duration-200 gap-2">
      <h2>
        <a className="font-bold">Nome:</a> Bruna Rafaela
      </h2>
      <div className="flex items-center gap-2">
         <a className="font-bold"><Mail/></a> <p>email@email.com</p>
      </div>
      <div className="flex items-center gap-2">
         <a className="font-bold"><Phone/></a> <p>86 99999-9999</p>
      </div>
      <button className="self-start text-white  bg-red-400 rounded px-4 py-2 cursor-pointer hover:bg-red-500">
        Deletar
      </button>
    </article>
  )
}