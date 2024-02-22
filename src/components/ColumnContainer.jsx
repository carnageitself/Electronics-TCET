import { SortableContext, useSortable } from "@dnd-kit/sortable";
import TrashIcon from "./TrashIcon";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
  backgroundColor,
}) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      opacity-40
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
      "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
  w-[350px]
  h-[500px]
  max-h-[500px]
  rounded-md
  flex
  flex-col
  shadow-xl
  "
    >
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className={`
      ${backgroundColor}
      text-black
      text-md
      h-[60px]
      cursor-grab
      rounded-md
      uppercase
      p-3
      font-bold
      border-[#161C22]
      rounded-b-none
      border-4
      flex
      items-center
      justify-between
      `}
      >
        <div className="flex gap-2">
          <div
            className="
        flex
        justify-center
        items-center
        bg-columnBackgroundColor
        px-2
        py-1
        text-sm
        rounded-full
        "
          >
            
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-white outline-none px-2"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="
        stroke-gray-500
        hover:stroke-white
        hover:bg-black
        rounded
        px-1
        py-2
        "
        >
          <TrashIcon />
        </button>
      </div>

      {/* Column task container */}
      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto bg-gray-100 border">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
      {/* Column footer */}
      <button
        className={`flex gap-2 text-black items-center border-4 border-[#161C22] rounded-t-none rounded-md p-4 border-x-[#161C22] ${backgroundColor} hover:text-rose-500 active:bg-black`}
        onClick={() => {
          createTask(column.id);
        }}
      >
        <ControlPointOutlinedIcon />
        Add task
      </button>
    </div>
  );
}

export default ColumnContainer;