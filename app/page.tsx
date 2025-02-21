import SignInButton from "@/components/sign-in-button";
import SignOutButton from "@/components/sign-out-button";
import UserInfo from "@/components/user-info";
import SignInButtonClient from "@/components/client/signin-button";
import SignOutButtonClient from "@/components/client/signout-button";

const Page = () => {
  return (
    <>
      <div>
        <SignInButton />
        <SignOutButton />
        <UserInfo />
      </div>

      <div>
        <SignInButtonClient />
        <SignOutButtonClient />
      </div>
    </>
  );
};

export default Page;
