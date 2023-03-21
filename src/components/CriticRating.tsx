import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticRating = ({ score }: Props) => {
  return (
    <Badge
      borderRadius={5}
      paddingX={2}
      colorScheme={score > 70 ? "green" : "red"}
      fontSize={"1.1rem"}
    >
      {score}
    </Badge>
  );
};

export default CriticRating;
