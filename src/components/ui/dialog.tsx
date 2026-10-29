import * as React from "react";
import * as D from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";
export const Dialog = D.Root;
export const DialogTrigger = D.Trigger;
export const DialogTitle = D.Title;
export const DialogDescription = D.Description;
export const DialogClose = D.Close;
export function DialogContent({
  children,
  className,
  onOpenAutoFocus,
  onCloseAutoFocus,
  ...props
}: React.ComponentProps<typeof D.Content>) {
  const opener = React.useRef<HTMLElement | null>(null);
  return (
    <D.Portal>
      <D.Overlay className="dialog-overlay" />
      <D.Content
        className={cn("dialog-content", className)}
        {...props}
        onOpenAutoFocus={(event) => {
          opener.current = document.activeElement as HTMLElement;
          onOpenAutoFocus?.(event);
        }}
        onCloseAutoFocus={(event) => {
          onCloseAutoFocus?.(event);
          if (!event.defaultPrevented && opener.current?.isConnected) {
            event.preventDefault();
            opener.current.focus();
          }
        }}
      >
        {children}
        <D.Close
          className="dialog-close button button-ghost button-icon"
          aria-label="Fechar janela"
        >
          <X />
        </D.Close>
      </D.Content>
    </D.Portal>
  );
}
