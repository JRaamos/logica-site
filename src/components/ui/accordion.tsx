import * as React from "react";
import * as A from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
export const Accordion = A.Root;
export const AccordionItem = A.Item;
export function AccordionTrigger({
  children,
  ...props
}: React.ComponentProps<typeof A.Trigger>) {
  return (
    <A.Header>
      <A.Trigger className="accordion-trigger" {...props}>
        {children}
        <Plus aria-hidden="true" />
      </A.Trigger>
    </A.Header>
  );
}
export function AccordionContent({
  children,
  ...props
}: React.ComponentProps<typeof A.Content>) {
  return (
    <A.Content className="accordion-content" {...props}>
      <div>{children}</div>
    </A.Content>
  );
}
