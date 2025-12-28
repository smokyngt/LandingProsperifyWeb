import * as React from "react";

declare module "@tabler/icons-react" {
  export interface IconProps extends React.SVGProps<SVGSVGElement> {}

  export const IconMenu2: React.FC<IconProps>;
  export const IconX: React.FC<IconProps>;
  // Add other icons here if you start using them
}
