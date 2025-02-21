import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
const SignOutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button variant="secondary" type="submit">
        Sign Out
      </Button>
    </form>
  );
};

export default SignOutButton;
