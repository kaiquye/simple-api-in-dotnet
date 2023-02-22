import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import *as yup from "yup";
import { Container } from "./style/styles.componets";

export function LoginPage() {
  const schame = yup.object({
    login: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(schame),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>login</label>
            <input {...register("login")} placeholder="login" />
            <p>{errors.login?.message}</p>
          </div>
          <div>
            <label>password</label>
            <input {...register("password")} placeholder="password" />
            <p>{errors.password?.message}</p>
          </div>
        </form>
      </Container>
    </section>
  );
}
