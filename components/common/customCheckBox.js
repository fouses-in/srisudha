import router from "next/router";

export default function CustomCheckBox({
  label,
  value = false,
  handleChange,
  val,
}) {
  return (
    <div className="flex space-x-2 items-center">
      <input
        type="checkBox"
        value={val}
        name="accept"
        onChange={handleChange}
        className="rounded-sm h-5 w-5"
      />
      <div className="text-sm font-semibold">
        Accept{" "}
        <span
          className="text-primary font-bold"
          //   onClick={() => router.push("/pdfViewer")}
        >
          Terms And Conditions
        </span>
      </div>
    </div>
  );
}
