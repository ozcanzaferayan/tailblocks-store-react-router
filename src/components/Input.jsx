const Input = ({
  label = "Name",
  name,
  type = "text",
  className = "w-1/2 p-2",
}) => {
  return (
    <div className={`${className}`}>
      <div className="relative">
        <label htmlFor="email" className="text-sm leading-7 text-gray-600">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
        />
      </div>
    </div>
  );
};

export default Input;
