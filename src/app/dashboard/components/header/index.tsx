import { Container } from "@/components/container";
import Link from "next/link";


export function DashboardHeader(){
  return(
    <Container>
      <header className="w-full my-4 p-3 flex gap-4">
          <button><Link href="/dashboard" className="text-blue-500  font-medium hover:text-blue-700 hover:font-bold duration-200">Dashboard</Link ></button>
          <button><Link href="/dashboard/customer" className="text-blue-500  font-medium hover:text-blue-700 hover:font-bold duration-200">Clients</Link ></button>
          <button><Link href="/tickets" className="text-blue-500  font-medium hover:text-blue-700 hover:font-bold duration-200">Tickets</Link ></button>
          <button><Link href="/auditory" className="text-blue-500  font-medium hover:text-blue-700 hover:font-bold duration-200">Auditory</Link ></button>
      </header>
    </Container>
  )
}