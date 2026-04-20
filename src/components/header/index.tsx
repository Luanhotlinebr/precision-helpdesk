import Link from "next/link"

//Icones
import { User } from "@deemlol/next-icons";
import { LogOut } from "@deemlol/next-icons";

export const Header=()=>{
  return(
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
        <h1 className="font-bold text-2xl pl-1 hover:tracking-wide duration-300">
          <span className="text-blue-500">Precision Helpdesk</span>
        </h1>
        </Link>

      <div className="flex items-baseline gap-4">        
        <button>       
          <Link href="/dashboard"><User  size={26}
          /></Link ></button>
        <button><Link href="/logout"><LogOut size={26}
        /></Link></button></div>
      </div>
    </header>
  )
}