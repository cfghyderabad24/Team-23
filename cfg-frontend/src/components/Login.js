import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen mt-20 ">
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
            <a to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              St. Bhatevara's
              </span>
              Page
            </a>
            <p className="text-sm mt-5">
              Welcome to the Login page of St Bhatevara NGO
            </p>
          </div>

          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your email" />
                <TextInput
                  type="text"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <div>
                <Label value="Your password" />
                <TextInput type="text" placeholder="Password" id="password" />
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Login
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}