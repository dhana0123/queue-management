import React from "react";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  item: { id: number; title: string };
  index: number;
  draggableId: number;
  containerId: number;
};

const Card = ({ index, item, draggableId, containerId }: Props) => {
  const theme = useTheme();
  return (
    <Draggable index={index} draggableId={`${draggableId}-${containerId}`}>
      {(provided, snapshot) => (
        <>
          <MuiCard
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            style={{
              ...provided.draggableProps.style,
              backgroundColor: snapshot.isDragging ? "#556EE6" : "white",
              color: snapshot.isDragging ? "white" : "#919EAB",
            }}
            variant="outlined"
            sx={{
              borderRadius: 3,
              boxShadow: theme.shadows[4],
              cursor: "pointer",
              mb: 1,
              width: "100%",
            }}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={1}
                sx={{ userSelect: "none" }}
              >
                <Typography
                  color={"grey.800"}
                  fontSize={{ fontSize: 10 }}
                  component="div"
                  sx={{ userSelect: "none" }}
                >
                  #43736
                </Typography>

                <Typography sx={{ fontSize: 11, mr: 1, userSelect: "none" }}>
                  {item.title}
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: 11, mr: 1, userSelect: "none" }}>
                Name: Patient
              </Typography>
            </CardContent>
          </MuiCard>
        </>
      )}
    </Draggable>
  );
};

export default Card;
