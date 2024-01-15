import Image from "next/image";
function Empty({
  label,
  height = "h-80",
  className = "",
  margin = "mt-20",
  size = "text-xl lg:text-4xl",
}) {
  return (
    <div
      className={`flex ${margin} flex-col items-center justify-center bg-white py-4 md:space-y-4 ${className}`}
    >
      <div className={`relative mb-12  md:mb-0 ${height} w-2/3 max-w-lg`}>
        <Image
          alt="Mountains"
          src="/images/empty.svg"
          layout="fill"
          objectFit="contain"
          className="shadow-lg"
        />
      </div>
      <div className={`w-2/3 text-center ${size}`}>{label}</div>
    </div>
  );
}
export default Empty;
