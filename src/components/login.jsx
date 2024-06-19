import { Field, Input, Label, Button } from "@headlessui/react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
  // age: yup.number().positive().integer().required(),
}).required();

const Login = () => {
 

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    const userdata ={
      username: data.username,
      password: data.password
    };

    const errors = schema.validate(userdata);

    if (errors.length > 0) {
      alert(errors.join("\n"));
    }
  
    axios
    .post("https://dummyjson.com/auth/login", userdata)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("userName", userdata.username);
        toast.success("Successfully login!");
      } else {
        toast.error("Mismatch Credentials!");
      }
    })
    .catch((error) => {
      toast.error("Mismatch Credentials!");
      console.log(error.data);
    });
  }
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="w-[380px] m-auto bg-black p-28 rounded-lg ">
          <Field>
            <Label className="text-sm/6 font-medium text-white">Sign in</Label>
            <Input
              {...register("username", {
                 required: {
                  value :true,
                  message:"Username is required"
              }
             
            })}
              placeholder="Enter your email"
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            />
            <p>{errors.username?.message}</p>
            <Input
             {...register("password", {
              required: {
               value :true,
               message:"Password is required"
            }})}
              placeholder="Password"
              required=""
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            />
            <Button type="submit" className="mt-20 rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
              Submit
            </Button>
          </Field>
        </div>
      </form>
    </>
  );
};
export default Login;
