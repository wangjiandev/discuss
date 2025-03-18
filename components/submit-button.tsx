import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isPending: boolean;
}

const SubmitButton = ({ isPending }: SubmitButtonProps) => {
  const ButtonContent = isPending ? (
    <Loader2 className="w-4 h-4 animate-spin" />
  ) : (
    <span>提交</span>
  );

  return (
    <Button
      type="submit"
      size="sm"
      variant="outline"
      disabled={isPending}
      className="w-32"
    >
      {ButtonContent}
    </Button>
  );
};

export default SubmitButton;
