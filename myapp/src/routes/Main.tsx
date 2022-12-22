import React from "react";
import { Box, Stack, Paper } from "@mui/material";
import { TopBar, NavBar } from "../sections";
import Container from "../components/Container";
import Card from "../components/Card";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

type list = {
  id: number;
  title: string;
};

const InitialContainers: { title: string; list: list[] }[] = [
  {
    title: "WL",
    list: [{ id: 1, title: "PatientName" }],
  },
  {
    title: "Booked",
    list: [
      { id: 1, title: "namecool" },
      { id: 2, title: "name3" },
    ],
  },
  {
    title: "Arrived",
    list: [
      { id: 1, title: "juswin" },
      { id: 2, title: "name3" },
    ],
  },
  { title: "Checked", list: [{ id: 1, title: "name" }] },
  { title: "Lab", list: [{ id: 1, title: "name" }] },
  { title: "Completed", list: [{ id: 1, title: "name" }] },
  { title: "NoShow", list: [{ id: 1, title: "name" }] },
];

const Main = () => {
  const [containers, setContainers] = React.useState(InitialContainers);

  const handleDargItem = (result: DropResult) => {
    if (!result.destination || !result.source) {
      return;
    }
    const { droppableId: sourceContainer, index: sourceIndex } = result.source;
    const { droppableId: destinationcontainer, index: destinationIndex } =
      result.destination;
    const [removedItem] = containers[Number(sourceContainer)].list.splice(
      sourceIndex,
      1
    );
    containers[Number(destinationcontainer)].list.splice(
      destinationIndex,
      0,
      removedItem
    );
    setContainers(containers);
  };

  return (
    <Box width="100wh" sx={{ minHeight: "100vh" }} bgcolor="#f6f7ff">
      <TopBar />
      <NavBar />
      <Box p={2}>
        <Stack direction="row" spacing={2}>
          <DragDropContext onDragEnd={handleDargItem}>
            {containers.map((container, idx) => (
              <Container
                droppableId={idx}
                key={idx}
                title={container.title}
                list={container.list}
              />
            ))}
          </DragDropContext>
        </Stack>
      </Box>
    </Box>
  );
};

export default Main;
