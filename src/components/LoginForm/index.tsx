import React, { useState } from "react";

export const LoginForm = ({ setIsLogin }: any) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState(false);

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginError(false);
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.username === "shar" && form.password === "123") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
      setLoginError(true);
    }
  };
  return (
    <>
      <form
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   //   border: "1px solid black",
        // }}
        onSubmit={onSubmitForm}
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          placeholder="username"
          type="text"
          onChange={onChangeForm}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          placeholder="password"
          type="password"
          onChange={onChangeForm}
        />
        <button type="submit">Submit</button>
      </form>
      {loginError ? <span>Wrong username/password</span> : <></>}
    </>
  );
};
