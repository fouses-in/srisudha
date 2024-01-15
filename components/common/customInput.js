import React, { useState } from "react";
import EyeIcon from "../icons/outline/eyeIcon";
import EyeOffIcon from "../icons/outline/eyeOffIcon";

export default function CustomInput({
  title = false,
  placeholder,
  height = 14,
  textarea = false,
  label,
  maxLength,
  showError = true,
  name,
  type,
  onBlur,
  onChange,
  checkError = false,
  errors,
  touched,
  className = "md:bg-white  border-1px border-black border-opacity-5",
  value,
}) {
  const [inputType, setInputType] = useState(type);

  return (
    <div className="flex flex-col gap-2 ">
      {title && (
        <label className=" font-semibold pl-1 text-[17px] font-Bitter">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          type={type}
          maxLength={maxLength}
          spellCheck={false}
          name={name}
          className={`${height} py-2 w-full placeholder:font-normal placeholder:text-gray-400 font-Roboto bg-white px-4 border-1px border-gray-300`}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input
          type={type}
          maxLength={maxLength}
          spellCheck={false}
          name={name}
          className="h-12 w-full placeholder:font-normal placeholder:text-gray-400 font-Roboto bg-white px-4 border-1px border-gray-300"
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      )}

      {errors[name] && touched[name] && showError && (
        <h2 className="ml-1 text-start text-sm  font-light text-red-400">
          {errors[name]}
        </h2>
      )}
    </div>
  );
}

export function SigninInput({
  title = false,
  height = 14,
  label,
  maxLength,
  showError = true,
  name,
  type,
  onBlur,
  onChange,
  checkError = false,
  errors,
  touched,
  className = "md:bg-white   border-opacity-5",
  value,
}) {
  const [inputType, setInputType] = useState(type);
  let body;
  if (type == "password") {
    body = (
      <div
        className={` h-${height} w-full  border-1px  rounded-lg flex  overflow-hidden     text-lg  text-gray-500  ${className}`}
      >
        <input
          type={inputType}
          maxLength={maxLength}
          spellCheck={false}
          name={name}
          className={` h-full  w-full  border-none px-2  text-base  text-gray-600    placeholder:text-xs placeholder:text-black placeholder:text-opacity-40  focus:outline-none `}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={label}
          value={value}
        />
        {inputType == "text" ? (
          <div
            className="px-4 flex items-center"
            onClick={() => setInputType("password")}
          >
            <EyeOffIcon className=" h-5 w-5 text-gray-500" />
          </div>
        ) : (
          <div
            className="px-4 flex items-center"
            onClick={() => setInputType("text")}
          >
            <EyeIcon className=" h-5 w-5 text-gray-500" />
          </div>
        )}
      </div>
    );
  } else {
    body = (
      <input
        type={type}
        maxLength={maxLength}
        spellCheck={false}
        name={name}
        className={` h-${height} w-full border-1px text-base  rounded-lg px-2   text-gray-600  placeholder:text-sm placeholder:text-black placeholder:text-opacity-40  focus:outline-none ${className}`}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={label}
        value={value}
      />
    );
  }
  console.log(checkError && errors[name]);

  return (
    <div className="flex-1">
      <div className=" flex flex-col  ">
        {title && (
          <div className="mb-2 w-40 flex-shrink-0 ml-1 text-gray-700  text-start text-sm ">
            {label}
          </div>
        )}
        {body}
      </div>
      {errors[name] && touched[name] && showError && (
        <h2 className="ml-1 mt-1 text-start text-xs   font-light text-red-400">
          {errors[name]}
        </h2>
      )}
    </div>
  );
}

export function OptionGroup({
  title = false,
  height = 14,
  label,
  options,
  name,

  onChange,

  className = "md:bg-white   border-opacity-5",
  value,
}) {
  return (
    <div className="flex-1">
      <div className=" flex gap-10 items-center">
        {title && (
          <div className="mb-0.5 w-60 ml-1 text-gray-600  text-start text-lg">
            {label}
          </div>
        )}
        <div
          className={` h-${height} w-full  border-b-2  rounded-sm flex  overflow-hidden     text-lg md:bg-gray-100 text-gray-500  ${className}`}
        >
          <select
            name={name}
            className={` h-full ${
              value ? "text-gray-600" : "text-black text-opacity-40"
            }   w-full  border-none px-2 mr-2 rounded-sm  text-lg md:bg-gray-100     placeholder:text-sm placeholder:text-black placeholder:text-opacity-40  focus:outline-none `}
            onChange={onChange}
            placeholder={label}
            value={value}
          >
            {[{ label: label, value: null }, ...options].map((value) => (
              <option key={value.value} value={value.value}>
                {value.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
