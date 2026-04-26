"use client";

import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
  name:z.string().min(1,"O campo nome é obrigatório"),
  email:z.email("Digite uma email válido").min(1,"O campo email é obrigatório"),
  phone:z.string().refine((value)=>{
    return /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) || /^\d{2}\s\d{9}$/.test(value) || /^\d{11}$/.test(value);
  },{message:"O número deve estar no formato: (DD) 999999999"}),
  adress:z.string()
})

type FormData = z.infer<typeof schema>

export function NewCustomerForm(){
  const {register,handleSubmit,formState:{errors}} = useForm<FormData>({
    resolver:zodResolver(schema)
  })

  return (
    <form>
      <label>Nome</label>
      <input type="text" placeholder="Digite o nome e sobrenome do cliente"/>
    </form>
  )
}