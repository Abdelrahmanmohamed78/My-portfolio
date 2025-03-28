/* eslint-disable react/prop-types */

export default function PageTitle({ children, center }) {
  return (
    <h2 className={`text-4xl ${center ? "text-center" : ""} md:text-start md:text-5xl lg:text-6xl font-extrabold  first-letter:text-[var(--alt-color)] mt-12 mb-6`}>{children}</h2>
  )
}
