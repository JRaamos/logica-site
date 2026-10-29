import * as React from "react";
import * as C from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
export function Checkbox(props: React.ComponentProps<typeof C.Root>) {
  return (
    <C.Root className="checkbox" {...props}>
      <C.Indicator>
        <Check />
      </C.Indicator>
    </C.Root>
  );
}
