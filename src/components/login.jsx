import { Field, Input, Label, Button } from "@headlessui/react";
import clsx from "clsx";
import { useForm } from "react-hook-form"
import { useEffect } from 'react';
import axios from "axios";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userName: '',
      password: ''
    }
  });

  // useEffect(() => {
  //   axios
  //     .post('https://dummyjson.com/auth/login')
  //     .then((response) => {
  //       // setLogin(response.json);
  //       console.log(response.json);
  //     })
   
  // }, [])
  
  return (
    <>
    <form onSubmit={handleSubmit(console.log)}>

      <div className="w-[380px] m-auto bg-black p-28 rounded-lg ">
        <Field>
          <Label className="text-sm/6 font-medium text-white">
            Sign in
          </Label>
          <Input
            placeholder="Enter your email"
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
          <Input
            placeholder="Password"
            required=""
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
          <Button className="mt-20 rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
            Submit
          </Button>
        </Field>
      </div>
    </form>
    </>
  );
};
export default Login;
