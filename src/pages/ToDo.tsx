import ToDoContainer from "@/components/toDo/ToDoContainer";
import ToDoHeader from "@/components/toDo/ToDoHeader";

const ToDo = () => {
  return (
    <div className="custom-container">
      <div className="mt-2 bg-slate-100 rounded-sm px-8 pt-6 pb-8">
        <ToDoHeader />
        <ToDoContainer/>
        <div className="bg-white rounded-2xl rounded-t-none mt-4">
              <p className="text-center pt-5 text-lg text-gray-400 font-medium">
                Task list is empty
                <button
                  className="underline text-green-600 text-base px-1"
                >
                  Add Task
                </button>
              </p>
              <div className="w-full flex justify-center items-center opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="300px"
                  height="300px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15 18.5L20 13.5M20 18.5L15 13.5"
                    stroke="#1C274C"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.5"
                    d="M21 6L3 6"
                    stroke="#1C274C"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    opacity="0.5"
                    d="M21 10L3 10"
                    stroke="#1C274C"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    opacity="0.5"
                    d="M11 14L3 14"
                    stroke="#1C274C"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    opacity="0.5"
                    d="M11 18H3"
                    stroke="#1C274C"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
      </div>
    </div>
  );
};

export default ToDo;