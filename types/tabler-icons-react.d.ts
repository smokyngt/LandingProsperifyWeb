declare module "@tabler/icons-react" {
  import * as React from "react";

  export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    stroke?: number | string;
  }

  export const IconMenu2: React.FC<IconProps>;
  export const IconX: React.FC<IconProps>;
}