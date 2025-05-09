import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [animateSwipe, setAnimateSwipe] = useState("");
  const fullText = "Loading";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        setAnimateSwipe("animate-swipe");
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 900);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-fixed bg-no-repeat bg-cover bg-center ${animateSwipe}`}
    >
      <div className="absolute h-full w-full bg" />
      <div className="mb-4 text-4xl z-50 font-sans text-[#1A1A1A] font-bold">
        <span className="animate-blink ml-1"> {text} </span>
      </div>

      <div className="w-[300px] h-[10px] bg-[#1A1A1A] bg-fixed rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-white bg-fixed shadow-[0_0_15px_#3b82f6] animate-loading-bar" />
      </div>

      <div className="w-[70%] text-[#1A1A1A] 3xs:text-sm md:text-lg italic font-sans z-50 flex justify-center items-center text-center mt-7">
        <p>
          {" "}
          Built and deployed using a CI/CD pipeline (GitHub Actions + Netlify).
        </p>
      </div>
    </div>
  );
};
