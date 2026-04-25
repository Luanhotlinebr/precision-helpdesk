
export function CardCustomer(){
  return(
    <article className="flex flex-col border-2 bg-gray-100 p-3 rounded-lg hover:scale-102 duration-200">
      <h2>
        <a className="font-bold">Nome:</a> Bruna Rafaela
      </h2>
      <p>
        <a className="font-bold">Email:</a> email@email.com
      </p>
      <p>
        <a className="font-bold">Telefone</a> 8699999-9999
      </p>
      <button className="self-start text-white hover:text-black bg-red-400 rounded px-4 py-2 cursor-pointer hover:bg-red-700">
        Deletar
      </button>
    </article>
  )
}