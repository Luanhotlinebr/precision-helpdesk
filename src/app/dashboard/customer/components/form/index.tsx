"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";
import Link from "next/link";

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatório"),
  email: z
    .email("Digite uma email válido")
    .min(1, "O campo email é obrigatório"),
  phone: z.string().refine(
    (value) => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^\d{2}\s\d{9}$/.test(value) ||
        /^\d{11}$/.test(value)
      );
    },
    { message: "O número deve estar no formato: (DD) 999999999" },
  ),
  adress: z.string(),
});

type FormData = z.infer<typeof schema>;

export function NewCustomerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function handleRegisterCustomer(data: FormData) {
    console.log(data);
  }

  return (
    <form
      className="flex flex-col mt-6"
      onSubmit={handleSubmit(handleRegisterCustomer)}
    >
      <label className="mb-1 text-lg font-medium">Nome</label>
      <Input
        type="text"
        name="name"
        placeholder="Carlos Roberto"
        error={errors.name?.message}
        register={register}
      />
      <label className="mb-1 text-lg font-medium">Email</label>
      <Input
        type="text"
        name="email"
        placeholder="seuemail@email.com"
        error={errors.email?.message}
        register={register}
      />
      <label className="mb-1 text-lg font-medium">Telefone</label>
      <Input
        type="text"
        name="phone"
        placeholder="55 99999999"
        error={errors.phone?.message}
        register={register}
      />
      <label className="mb-1 text-lg font-medium">Endereco</label>
      <Input
        type="text"
        name="adress"
        placeholder="55 99999999"
        error={errors.adress?.message}
        register={register}
      />
      <div className="flex flex-col sm:flex-row items-center">
        <button
          className="flex-1 my-4 px-2 h-11 font-bold cursor-pointer rounded-md"
          type="button"
        >
          <Link href="/dashboard/customer">Cancelar</Link>
        </button>
        <button
          className="bg-blue-500 my-4 px-2 h-11 text-white font-bold cursor-pointer flex-1 rounded-md"
          type="submit"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}
