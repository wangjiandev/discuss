import { auth } from "@/auth";

const UserInfo = async () => {
  const session = await auth();

  return <div>{session?.user?.email?.charAt(0)}</div>;
};

export default UserInfo;
