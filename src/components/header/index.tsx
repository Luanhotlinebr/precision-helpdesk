"use client";

import Link from "next/link";
import {signIn,signOut,useSession} from 'next-auth/react';
import { LogOut } from "@deemlol/next-icons";
import { Loader } from "@deemlol/next-icons"
import { Lock } from "@deemlol/next-icons"
import { User } from "@deemlol/next-icons"

export function Header(){
 const { status,data } = useSession();

 async function handleLogin(){
   await signIn();
 }

  async function handleLogout(){
    await signOut();
  }

  return(
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
        <h1 className="font-bold text-2xl pl-1 hover:tracking-wide duration-300">
          <span className="text-blue-500">Precision Helpdesk</span>
        </h1>
        
        </Link>

        {status === "loading" &&(
          <button  className="animate-spin">
            <Loader size={26}/>
          </button>
        )}

        {status === "unauthenticated" &&(
          <button onClick={handleLogin} 
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 duration-200 cursor-pointer">
            <Lock size={20} /> Entrar com o Google
          </button>
        )}
        {status === "authenticated" &&(
          <div className="flex items-center gap-3">
            <button className="cursor-pointer"><Link href="/dashboard"><User  size={26}/></Link></button>
            <button  onClick={handleLogout} className="cursor-pointer"><LogOut  size={26}/></button>

          </div>
        )}
      </div>
    </header>
  )
}