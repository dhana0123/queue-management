import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";

type Props = {
  title: string;
  droppableId: number;
  list: {
    id: number;
    title: string;
  }[];
};

const Container = ({ title, droppableId, list }: Props) => {
  return (
    <Droppable droppableId={`${droppableId}`}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.droppableProps}
          elevation={4}
          sx={{
            width: "100%",
            p: 2,
            minHeight: "80vh",
            borderRadius: 3.4,
            background: "white",
            border: "1px solid rgb(237, 237, 237)",
          }}
        >
          <Typography variant="subtitle1" color="gray.800">
            {title}
          </Typography>
          <Box mt={1}>
            {(list || []).map((item, idx) => (
              <Card
                key={idx}
                index={idx}
                draggableId={item.id}
                item={item}
                containerId={droppableId}
              />
            ))}
            {provided.placeholder}
          </Box>
        </Paper>
      )}
    </Droppable>
  );
};

export default Container;
