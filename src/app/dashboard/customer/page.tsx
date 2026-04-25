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
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gerenciamento de clientes</h1>
        <Link href="dashboard/customer/new" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 duration-200">Novo cliente</Link>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 gap-3">
        <CardCustomer/>
        <CardCustomer/>
        <CardCustomer/>
      </section>
    </main>
  </Container>
  )
}
