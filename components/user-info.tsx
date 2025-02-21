import { auth } from "@/auth";

const UserInfo = async () => {
  const session = await auth();

  return <div>{session?.user?.email}</div>;
};

export default UserInfo;
