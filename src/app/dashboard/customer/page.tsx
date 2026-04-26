import Link from "next/link";
import {authOptions} from '@/lib/auth';
import {redirect} from 'next/navigation'
import {getServerSession} from 'next-auth';
import {CardCustomer} from './components/card';
import { Container } from "@/components/container";

export default async function Customer(){
    const session = await getServerSession(authOptions);
    console.log(session);
  
    if(!session || !session.user){
      redirect("/");
    }

  return (
  <Container>
    <main>
      <div className="flex items-center justify-between sm:flex-row flex-col gap-2">
        <div className="flex items-center flex-col">
        <h1 className="text-3xl font-bold self-start">Gerenciamento de clientes</h1>
        <p className="sm:block hidden">Veja, edite e gerencie sua base de dados de clientes com detalhes.</p>
        </div>
        <Link href="dashboard/customer/new" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 duration-200 align-middle">Novo cliente</Link>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 gap-3">
        <CardCustomer/>
        <CardCustomer/>
        <CardCustomer/>
        <CardCustomer/>
        <CardCustomer/>
      </section>
    </main>
  </Container>
  )
}
