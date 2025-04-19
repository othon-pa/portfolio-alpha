import React, { useState } from "react";
import {
  FillContainerWrapper,
  HoverFillBar,
  HoverFillContent,
  SkillLevel,
  SkillName,
} from "./styles";

interface FillContainerProps {
  fill?: number;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

const FillContainer: React.FC<FillContainerProps> = ({
  fill = 70,
  children,
}) => {
  const [hovered, setHovered] = useState(false);
  const handleHover = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    status: boolean
  ) => {
    console.log("Hover status:", status);
    setHovered(status);
  };

  const getSkillLevel = (fill: number) => {
    if (fill >= 90) return "Advanced";
    if (fill >= 70) return "Proficient";
    if (fill >= 40) return "Intermediate";
    return "Learning";
  };
  return (
    <FillContainerWrapper
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
    >
      <HoverFillBar
        className="hover-fill-bar"
        style={{
          width: hovered ? `${fill}%` : "0%",
          height: "100%",
        }}
      />
      <HoverFillContent className="bebas-neue-regular">
        <SkillName>{children}</SkillName>
        <SkillLevel className="bebas-neue-regular">
          {getSkillLevel(fill)}
        </SkillLevel>
      </HoverFillContent>
    </FillContainerWrapper>
  );
};

export default FillContainer;
