import { BiUser } from 'react-icons/bi';

const InputIcon = ({icon,...props}) => {
  return (
    <div className="flex items-center border rounded-md px-4 py-2 focus-within:border-yellow-700 transition-all duration-300 focus-within:ring-1 focus-within:ring-yellow-700">
      {icon}
      <input
        className="border-none focus:outline-none w-full placeholder:text-sm"
        {...props}
      />
    </div>
  );
};

export default InputIcon;
