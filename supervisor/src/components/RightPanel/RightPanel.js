import React, { useEffect, useState } from "react";
import "./RightPanel.css";
// COMPONENTS
import RightPanel__Header from "./components/RightPanel__Header";
import { rushers } from "../../data/rushers";
import RusherCard from "./components/RusherCard";
// MUI
import { ThemeProvider } from "@emotion/react";
import { sxButton } from "./muiStyles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// REACT-BEAUTIFUL-DND

const RightPanel = () => {
  const [active, setActive] = useState(true);
  // const [Rushers, setRushers] = useState(rushers);
  const [activeRushers, setActiveRushers] = useState();
  const [inactiveRushers, setInactiveRushers] = useState();

  useEffect(() => {
    setActiveRushers(rushers.filter((r) => r.status == "on").map((r) => r));
    setInactiveRushers(rushers.filter((r) => r.status == "off").map((r) => r));
  }, []);
  console.log(activeRushers);
  console.log(inactiveRushers);

  const handleOnDragEnd = (result) => {
    const items = Array.from(result);
    const [reoderItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reoderItem);
    // setRushers(items);
  };

  return (
    <ThemeProvider theme={sxButton}>
      <div className="rightPanel">
        <RightPanel__Header onToggleActive={setActive} />
        {/* <DragDropContext> */}
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="Rushers">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {/* {rushers.map((r) =>
                  active ? (
                    r.status == "on" && (
                      <Draggable key={r.name}>
                        <RusherCard rusherInfo={r} />
                      </Draggable>
                    )
                  ) : (
                    <Draggable key={r.name}>
                      r.status == "off" && (
                      <RusherCard rusherInfo={r} />)
                    </Draggable>
                  )
                )} */}
                {active
                  ? activeRushers?.map((r, i) => (
                      <Draggable key={r.name} draggableId={r.name} index={i}>
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <RusherCard rusherInfo={r} />
                          </div>
                        )}
                      </Draggable>
                    ))
                  : inactiveRushers?.map((r, i) => (
                      <Draggable key={r.name} draggableId={r.name} index={i}>
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <RusherCard rusherInfo={r} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </ThemeProvider>
  );
};

export default RightPanel;
