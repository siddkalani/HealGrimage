/* eslint-disable react/prop-types */

const HeaderClick = ({children, ...props}) => {
  return (
    <li className="flex gap-1 cursor-pointer h-full items-center hover:underline text-lg" {...props}>
      {children}
    </li>
  )
}

export default HeaderClick
