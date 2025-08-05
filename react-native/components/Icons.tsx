import { COLORS } from "@/constants/colors";

type IconProps = {
  Icon: React.FC<{
    width: number;
    height: number;
    fill: string;
    stroke: string;
  }>;
  size?: number;
  color?: keyof typeof COLORS;
};

// Icon Parser
export const Icon = ({ size = 24, color = "SnapchatRed", Icon }: IconProps) => (
  <Icon
    width={size}
    height={size}
    fill={COLORS[color]}
    stroke={COLORS[color]}
  />
);
