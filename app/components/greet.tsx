export const Greet = () => {
  console.log("Heading component");
  return (
  <div className="text-center mb-10 px-4 mx-auto  hover:-translate-y-1">
    <h1 className="text-3xl md:text-5xl font-bold   mb-4
                    relative inline-block bg-gradient-to-r from-gray-300 via-white to-gray-300 
                    bg-[length:200%_100%] text-transparent bg-clip-text 
                    animate-[shine_3s_linear_infinite]">
      <span className="bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800
                   bg-clip-text text-transparent">
         Welcome to Shopify!
      </span>       
      </h1>
    

      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        Your one-stop shop for smart gadget deals.
      </p>
    </div>
  );
};

