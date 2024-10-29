const Input = ({
  name,
  type = "text",
  placeholder,
  className,
  value,
  changeHandler,
}) => {
  return (
    <input
      type={type}
      className={`outline-0 border rounded py-2 px-2 w-full transition ${className}`}
      placeholder={placeholder}
      name={name}
      value={value === 0 ? "" : value}
      onChange={changeHandler}
    />
  );
};

export default Input;
