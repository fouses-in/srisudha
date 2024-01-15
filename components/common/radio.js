export default function Radio({
  label,
  onClick = () => {},
  selected,
  size = 8,
  space = 6,
  rounded = "rounded-full",
  className,
}) {
  return (
    <div className={`flex space-x-${space} items-center `} onClick={onClick}>
      <div
        className={`flex h-${size} w-${size} flex-shrink-0 items-center justify-center ${rounded}   border-secondary border-2px border-opacity-70`}
      >
        {selected && <div className={`h-5 w-5  ${rounded} bg-primary`} />}
      </div>

      <label
        for={`html `}
        className={`${className}  flex-1 break-all font-semibold text-xl`}
      >
        {label}
      </label>
    </div>
  );
}
