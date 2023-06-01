"use client";

export default function ContactForm() {
  const submitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      e.target.name.value,
      e.target.email.value,
      e.target.message.value
    );
  };

  return (
    <form onSubmit={submitMessage}>
      <FloatingLabelInput label="Name" type="text" name="name" required />
      <FloatingLabelInput label="Email" type="email" name="email" required />
      <FloatingLabelInput
        variant="textarea"
        label="Message"
        name="message"
        rows={5}
        required
      />
      <button
        type="submit"
        className="ml-auto block rounded-md bg-primary p-3 py-1.5 text-center text-sm font-bold sm:text-base"
      >
        Send Message
      </button>
    </form>
  );
}

type FLIProps = {
  variant?: "input" | "textarea";
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
};

const FloatingLabelInput = ({
  variant = "input",
  label,
  name,
  ...rest
}: FLIProps) => {
  const inputClasses =
    "peer block w-full appearance-none rounded-md border-2 border-white bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:outline-none focus:ring-0 focus:border-primary";

  const inputField =
    variant === "input" ? (
      <input name={name} className={inputClasses} placeholder=" " {...rest} />
    ) : (
      <textarea
        name={name}
        className={inputClasses}
        placeholder=" "
        {...rest}
      />
    );

  return (
    <div className="relative my-3 text-white opacity-70">
      {inputField}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-slate-950 px-2 text-sm duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
};
