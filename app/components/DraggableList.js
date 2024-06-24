"use client";

import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DraggableListItem } from "./DraggableListItem";
import { userData } from "../static";

export const DraggableList = () => {
  const [userList, setUserList] = useState(userData);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(userList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setUserList(items);
  };

  return (
    <div className="flex justify-center w-full h-full">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="user-data">
          {(provided) => (
            <ul
              className="relative space-y-4 w-[500px] flex flex-col items-center"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {userList.map((user, index) => (
                <DraggableListItem
                  key={user.title}
                  user={user}
                  index={index}
                  provided={provided}
                />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};


