const Container = ({ children, className }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <div className="px-7 flex justify-center transition-all duration-500">
        <div className="w-full sm:max-w-lg lg:max-w-5xl 2xl:max-w-7xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
