import {Field, Input, Label,Button } from '@headlessui/react'
import clsx from 'clsx'


const Login = () => {
  return (
    <>
    <div className="w-full max-w-md px-4">
      <Field>
      <Label className="text-sm/6 font-medium text-white">Loggin Form</Label>
        <Input
        placeholder="Enter your email"
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        />
        <Input placeholder="Password" required="" className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )} />
          <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
      Submit
    </Button>
      </Field>
      
    </div>
    </>
  );
};
export default Login;
