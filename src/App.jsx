import { useState } from "react";
import "./App.css";

function App() {
  const [selectedRating, setSelectedRating] = useState(undefined);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    if (selectedRating) {
      setIsFlipped(true);
    } else {
      alert("Please select a rating");
    }
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#141519]">
      <div className="h-[500px] w-[500px] flex flex-col p-8 bg-[#1F2630] rounded-3xl">
        {isFlipped ? (
          <article className="flex flex-col h-full justify-evenly items-center text-center">
            <div>logo</div>
            <div>You selected {selectedRating} out of 5</div>
            <h1>Thank you!</h1>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </article>
        ) : (
          <div>
            <article className="flex-1">
              <div className="my-8">logo</div>
              <h1 className="text-3xl font-bold mb-8">How did we do?</h1>
              <p className="text-lg mb-6">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </article>
            <div className="w-full flex flex-col justify-center flex-1 ">
              <ul className="flex justify-evenly mb-8">
                <button
                  className="bg-[#262F38] hover:bg-[#FE7512] focus:bg-[#7D8798] rounded-full p-6 transition-colors duration-300"
                  onClick={() => setSelectedRating(1)}
                >
                  1
                </button>
                <button
                  className="bg-[#262F38] hover:bg-[#FE7512] focus:bg-[#7D8798] rounded-full p-6 transition-colors duration-300"
                  onClick={() => setSelectedRating(2)}
                >
                  2
                </button>
                <button
                  className="bg-[#262F38] hover:bg-[#FE7512] focus:bg-[#7D8798] rounded-full p-6 transition-colors duration-300"
                  onClick={() => setSelectedRating(3)}
                >
                  3
                </button>
                <button
                  className="bg-[#262F38] hover:bg-[#FE7512] focus:bg-[#7D8798] rounded-full p-6 transition-colors duration-300"
                  onClick={() => setSelectedRating(4)}
                >
                  4
                </button>
                <button
                  className="bg-[#262F38] hover:bg-[#FE7512] focus:bg-[#7D8798] rounded-full p-6 transition-colors duration-300"
                  onClick={() => setSelectedRating(5)}
                >
                  5
                </button>
              </ul>
              <button
                className="bg-[#FE7512] hover:bg-white hover:text-[#FE7512] text-lg font-semibold uppercase rounded-full p-4"
                type="submit"
                onClick={() => handleFlip()}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
