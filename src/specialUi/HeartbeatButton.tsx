import type { ReactNode } from "react";


type HeartbeatButtonProps = {
  children?: ReactNode;
};

const HeartbeatButton = ({ children }: HeartbeatButtonProps) => {
  return (
    <>
      <style>
        {`
          @keyframes heartbeat {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
            }
          }

          .heartbeat-btn {
            animation: heartbeat 2s infinite ease-in-out;
          }
        `}
      </style>

      <div className="m-2">
        <button className="heartbeat-btn rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
          {children}
        </button>
      </div>
    </>
  );
};

export default HeartbeatButton;
