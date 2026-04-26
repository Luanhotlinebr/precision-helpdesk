import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { NewCustomerForm } from "../components/form";

export default async function NewCustomer(){
      const session = await getServerSession(authOptions);
      console.log(session);
    
  if(!session || !session.user){
    redirect("/");
  }

  return (
    <Container>
      <main className="flex flex-col mt-2 mb-2">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/customer" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 duration-200 align-middle">Voltar</Link>
          <h1 className="text-3xl font-bold self-start">Novo cliente</h1>
        </div>
          <NewCustomerForm/>

      </main>
    </Container>
  )
}