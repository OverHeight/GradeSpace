import Image from "next/image";
import Yonsei from "@/public/yonsei-university.jpg";
import React from "react";
import { Form } from "@/components/login/Form";

const Login = () => {
  return (
    <div className="bg-neutral-100 h-screen">
      <div className="flex h-screen justify-center items-center gap-4">
        <div className="bg-neutral-700 h-auto w-auto rounded-lg">
          <Image
            className="rounded-lg border-2 border-black opacity-80"
            src={Yonsei}
            alt="yonsei"
            width={600}
            height={400}
          />
        </div>
        <div className="flex-row bg-neutral-900 h-auto w-72 p-5 rounded-lg">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Login;
