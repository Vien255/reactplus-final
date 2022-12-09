import clinet from "./axiosClient";

export const tasks = async () => {
  const responts = await clinet.get("tasks");
  return responts.data;
};
