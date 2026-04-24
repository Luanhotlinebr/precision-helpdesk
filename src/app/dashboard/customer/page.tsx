import { Container } from "@/components/container";
import {authOptions} from '@/lib/auth';
import {redirect} from 'next/navigation'
import {getServerSession} from 'next-auth';


export default async function Customer(){
    const session = await getServerSession(authOptions);
    console.log(session);
  
    if(!session || !session.user){
      redirect("/");
    }

  return (
  <Container>
    <h1>Página de Clientes</h1>
  </Container>
  )
}