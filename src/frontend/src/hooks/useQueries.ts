import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitDemoRequest() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      businessName,
      message,
    }: {
      name: string;
      email: string;
      businessName: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitDemoRequest(name, email, businessName, message);
    },
  });
}
