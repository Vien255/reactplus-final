import clinet from "./axiosClient";

export const register = async (data) => {
  const responts = await clinet.post("users", data);
  return responts;
};
