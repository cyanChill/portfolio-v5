"use client";

import { useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Path, SubmitHandler, FieldError } from "react-hook-form";
import toast from "react-hot-toast";

import { contactSchema, type ContactSchemaType } from "@/lib/schema";

export default function ContactForm() {
  const { register, handleSubmit, reset, formState } =
    useForm<ContactSchemaType>({ resolver: zodResolver(contactSchema) });

  const submitMessage: SubmitHandler<ContactSchemaType> = async (d) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d),
    });

    try {
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message); // Some error has occurred
      } else {
        toast.success("Successfully sent your message.");
        reset();
      }
    } catch (err) {
      toast.error(
        "Something unexpected has occurred when sending your message."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(submitMessage)}>
      <Input label="Name" register={register} error={formState.errors.Name} />
      <Input
        label="Email"
        type="email"
        register={register}
        error={formState.errors.Email}
      />
      <TextArea
        label="Message"
        register={register}
        rows={5}
        error={formState.errors.Message}
      />
      <button
        type="submit"
        disabled={formState.isSubmitting}
        className="btn btn-lg ml-auto bg-primary"
      >
        Send Message
      </button>
    </form>
  );
}

type FormElement = {
  label: Path<ContactSchemaType>;
  register: UseFormRegister<ContactSchemaType>;
  error?: FieldError;
};

type InputProps = { type?: string } & FormElement;

const Input = ({ label, register, error, type = "text" }: InputProps) => {
  return (
    <div className="relative my-3 text-gray-400">
      <input
        type={type}
        placeholder=" "
        {...register(label)}
        className="peer block w-full appearance-none rounded-md border-2 border-gray-400 bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:border-primary focus:outline-none focus:ring-0"
      />
      <label
        htmlFor={label}
        className="pointer-events-none absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-90 transform bg-primary-bkg px-2 text-sm duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-fuchsia-400"
      >
        {label}
      </label>
      <p className="mt-1 text-sm font-semibold text-red-400">
        {error?.message}
      </p>
    </div>
  );
};

type TextAreaProps = { rows?: number } & FormElement;

const TextArea = ({ label, register, error, rows = 3 }: TextAreaProps) => {
  return (
    <div className="relative my-3 text-gray-400">
      <textarea
        placeholder=" "
        rows={rows}
        {...register(label)}
        className="peer block w-full resize-none appearance-none rounded-md border-2 border-gray-400 bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:border-primary focus:outline-none focus:ring-0"
      />
      <label
        htmlFor={label}
        className="pointer-events-none absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-90 transform bg-primary-bkg px-2 text-sm duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-fuchsia-400"
      >
        {label}
      </label>
      <p className="mt-1 text-sm font-semibold text-red-400">
        {error?.message}
      </p>
    </div>
  );
};
