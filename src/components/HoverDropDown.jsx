/* eslint-disable react/prop-types */
const HoverDropDown = ({ children, ...props }) => {
  return (
    <div
      className="absolute top-[102px] left-[50px] mt-2 w-1/2 bg-[#052560c8] h-[400px] border border-white"
      {...props}
    >
      {children}
    </div>
  );
};

export default HoverDropDown;
