"use client";

import { useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Path, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    Name: z.string().trim().nonempty(),
    Email: z.string().trim().email().nonempty(),
    Message: z.string().trim().nonempty(),
  })
  .required();
type IFormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<IFormValues>({
    resolver: zodResolver(schema),
  });

  const submitMessage: SubmitHandler<IFormValues> = (d) => {
    console.log(d);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitMessage)}>
      <Input label="Name" register={register} />
      <Input label="Email" type="email" register={register} />
      <TextArea label="Message" register={register} rows={5} />
      <button
        type="submit"
        className="ml-auto block rounded-md bg-primary p-3 py-1.5 text-center text-sm font-bold sm:text-base"
      >
        Send Message
      </button>
    </form>
  );
}

type FormElement = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
};

type InputProps = { type?: string } & FormElement;

const Input = ({ label, register, type = "text" }: InputProps) => {
  return (
    <div className="relative my-3 text-white opacity-70">
      <input
        type={type}
        placeholder=" "
        {...register(label)}
        className="peer block w-full appearance-none rounded-md border-2 border-white bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:border-primary focus:outline-none focus:ring-0"
      />
      <label
        htmlFor={label}
        className="pointer-events-none absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-slate-950 px-2 text-sm duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
};

type TextAreaProps = { rows?: number } & FormElement;

const TextArea = ({ label, register, rows = 3 }: TextAreaProps) => {
  return (
    <div className="relative my-3 text-white opacity-70">
      <textarea
        placeholder=" "
        rows={rows}
        {...register(label)}
        className="peer block w-full appearance-none rounded-md border-2 border-white bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:border-primary focus:outline-none focus:ring-0"
      />
      <label
        htmlFor={label}
        className="pointer-events-none absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-slate-950 px-2 text-sm duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
};
