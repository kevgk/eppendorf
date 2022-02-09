import { useState } from "react";
import { useForm } from "react-hook-form";

import { validateEmail } from "../utils/validateEmail";
import { validatePassword } from "../utils/validatePassword";
import { CenterWrapper } from "./CenterWrapper";
import { FormError } from "./FormError";
import styles from "./Form.module.css";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export function Form() {
  const [isSuccess, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    setSuccess(true);
  }

  return (
    <CenterWrapper>
      <h1>{isSuccess ? "That was valid!" : "Sign in"}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          placeholder="Name"
          {...register("name", { required: true, minLength: 2 })}
        />
        {!!errors?.name && (
          <FormError>Please enter at least 2 characters.</FormError>
        )}
        <input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: true,
            validate: (value) => validateEmail(value),
          })}
        />
        {!!errors?.email && <FormError>Please enter a valid email.</FormError>}
        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: true,
            validate: (value) => validatePassword(value),
          })}
        />
        {!!errors?.password && (
          <FormError>
            Please enter a password with at least 8 characters, one uppercase,
            one special character and one number.
          </FormError>
        )}
        <input type="submit" value="Sign in" />
      </form>
    </CenterWrapper>
  );
}
