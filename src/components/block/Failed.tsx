import { useState, useEffect } from "react";
import broken from "@assets/broken.svg";

const Failed: React.FC<{ message?: string }> = ({
  message = "Something went wrong!",
}) => {
  const [counter, setCounter] = useState(7);

  useEffect(() => {
    document.title = "Broken!";
  });

  const redirect = () => {
    window.location.href = "/";
  };

  setTimeout(() => {
    setCounter(counter - 1);
  }, 1000);

  if (counter === 0) {
    redirect();
  }

  return (
    <div className="h-full w-full bg-slate-950/50 fixed top-0 left-0 z-50 flex flex-col align-middle justify-center">
      <div className="flex flex-col items-center my-24">
        <img src={broken} alt="broken" className="w-36 h-36 mb-2" />
        <p className="my-3 italic text-slate-200 text-2xl">{message}</p>
        <p className="my-3 text-slate-50 font-bold flex items-center">
          <span>You will be redirect in </span>
          <span className="text-4xl mx-3">{counter}</span>
          <span> seconds</span>
        </p>
        <p
          className="my-3 py-2 px-6 text-slate-200 hover:text-slate-100 border-2 rounded-xl italic cursor-pointer"
          onClick={redirect}
        >
          Refresh!
        </p>
      </div>
    </div>
  );
};

export default Failed;
