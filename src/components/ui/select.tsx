import * as React from "react";
import * as S from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
export const Select = S.Root;
export const SelectValue = S.Value;
export function SelectTrigger(props: React.ComponentProps<typeof S.Trigger>) {
  return (
    <S.Trigger className="input select-trigger" {...props}>
      {props.children}
      <S.Icon>
        <ChevronDown />
      </S.Icon>
    </S.Trigger>
  );
}
export function SelectContent({ children }: React.PropsWithChildren) {
  return (
    <S.Portal>
      <S.Content position="popper" sideOffset={6} className="select-content">
        <S.Viewport>{children}</S.Viewport>
      </S.Content>
    </S.Portal>
  );
}
export function SelectItem({
  children,
  ...props
}: React.ComponentProps<typeof S.Item>) {
  return (
    <S.Item className="select-item" {...props}>
      <S.ItemText>{children}</S.ItemText>
      <S.ItemIndicator>
        <Check />
      </S.ItemIndicator>
    </S.Item>
  );
}
