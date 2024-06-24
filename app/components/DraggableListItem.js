"use client";

import React from "react";
import Image from "next/image";
import { Draggable } from "react-beautiful-dnd";

export const DraggableListItem = ({ user, index }) => {
  return (
    <Draggable key={user.title} draggableId={user.title} index={index}>
      {(provided, snapshot) => (
        <div
          className={`border border-gray-300 rounded-lg p-4 shadow-md bg-white transition-opacity ${
            snapshot.isDragging ? "opacity-50" : "opacity-100"
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            ...provided.draggableProps.style,
            width: snapshot.isDragging ? "200px" : "500px",
            left: snapshot.isDragging ? "150px" : "0px",
            position: snapshot.isDragging ? "absolute" : "",
          }}
        >
          {snapshot.isDragging && (
            <>
              <div className="border-2 border-t border-blue-500 absolute top-[49px] left-[-150px] right-[200px]"></div>
              <div className="border-2 border-t border-blue-500 absolute top-[49px] left-[200px] right-[-150px]"></div>
            </>
          )}
          <li className={"flex justify-start"}>
            <div className="mr-3">
              <Image
                src={`/images/${user.image}`}
                width={70}
                height={70}
                alt="User"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">{user.title}</h2>
              <p className="text-gray-700">
                {!snapshot.isDragging ? user.description : ""}
              </p>
            </div>
          </li>
        </div>
      )}
    </Draggable>
  );
};
