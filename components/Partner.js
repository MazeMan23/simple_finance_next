import React from "react";
import { Card } from "@nextui-org/react";

export const Partner = ({ image }) => (
  <Card className="mx-[2rem] w-[450px] h-[150px]">
    <Card.Body className="p-0">
      <Card.Image src={image} width="100%" height="100%" objectFit="cover" />
    </Card.Body>
  </Card>
);
