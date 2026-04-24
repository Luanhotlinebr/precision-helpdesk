import {authOptions} from '@/lib/auth';
import {redirect} from 'next/navigation'
import {getServerSession} from 'next-auth';
import { Container } from "@/components/container";

export default async function Dashboard(){
  const session = await getServerSession(authOptions);
  console.log(session);

  if(!session || !session.user){
    redirect("/");
  }
  
  return (
  <Container>
    <h1>Página dashboard</h1>
  </Container>
  )
}