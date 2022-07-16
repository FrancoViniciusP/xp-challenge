import React from 'react';

export default function LoginForm() {
  return (
    <form type="submit">
      <label htmlFor="email">
        Email
        <input id="email" type="text" />
      </label>
      <label htmlFor="password">
        Senha
        <input id="password" type="text" />
      </label>

      <button type="submit" aria-label="entrar" disabled> ENTRAR</button>

      <text>
        Esqueceu a senha?
        <strong> Clique Aqui</strong>
      </text>

    </form>

  );
}
