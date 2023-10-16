const login = async ({ email, password }: { email: string; password: string }) => {
  const response = await fetch(`https://backend-lendas-da-amazonia-c9bgnv0or-endrewazevedos-projects.vercel.app/auth/login`, {
    body: JSON.stringify({ email: email, password: password }),
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .catch(() => {});

  return response;
};

const signup = async ({ nome, email, senha }: { nome: string, email: string; senha: string }) => {
  const response = await fetch(`https://backend-lendas-da-amazonia-c9bgnv0or-endrewazevedos-projects.vercel.app/user/create`, {
    body: JSON.stringify({ nome: nome, email: email, senha: senha  }),
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .catch(() => {});

  return response;
};

const getUsers = async () => {
  const response = await fetch(`https://backend-lendas-da-amazonia-c9bgnv0or-endrewazevedos-projects.vercel.app/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .catch(() => {});

  return response.encontrados;
};

export const fnUser = {
  login,
  signup,
  getUsers,
};
