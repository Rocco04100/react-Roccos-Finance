const Intro = () => {
  return (
    <div className="border-black-600 text-white bg-stone-800 mx-10 my-10 m rounded-2xl shadow-lg flex flex-col justify-center items-center gap-4 p-8">
      <h1 className=" md:text-5xl sm:text-4xl text-3xl text-center font-bold">
        Welcome to Rocco's Finnance Visualizer
      </h1>
      <h3 className="text-lg md:text-xl text-center text-green-300 drop-shadow-md">
        With just some basic information it can can help you see where you're
        money goes
      </h3>
    </div>
  );
};

export default Intro;
