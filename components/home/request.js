import React from "react";
import CustomBorder from "../common/border";
import CustomInput from "../common/customInput";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { url } from "../../constants";
import { toast } from "react-toastify";

const schema = new Yup.ObjectSchema({
  name: Yup.string().required("Name is required"),
  number: Yup.string().required("Number is required"),
});

export default function Request() {
  return (
    <div className="max-w-1200 px-6 xl:px-0 mx-auto py-8 md:py-14 grid md:grid-cols-2 gap-14 md:gap-24">
      <div className="">
        <div className="flex gap-4 text-primary items-center">
          <CustomBorder width="w-12" />
          <p className="text-black font-medium">Request Callback</p>
        </div>
        <h2 className="text-[28px] lg:text-[46px] mt-4 max-w-xl text-black font-semibold leading-[32px] lg:leading-[56px] ">
          <span>You can request </span>
          <span>for call back, we will call!</span>
        </h2>
        <h3 className="mt-4 text-gray-400">
          Let’s Connect and Empower Your Business Today – Call Srisudha
          Consultancy
        </h3>
      </div>
      <div>
        <p className="text-gray-500">Fields marked with an * are required</p>
        <Formik
          validationSchema={schema}
          initialValues={{
            name: "",
            email: "",
            number: "",
            description: "",
          }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              setSubmitting(true);
              const { data } = await axios.post(`${url}/add/contact`, {
                ...values,
                request: true,
              });
              resetForm({
                values: {
                  name: "",

                  number: "",
                },
              });
              toast.success("Thank you for contacting with us.");
            } catch (err) {
              toast.error(
                err?.response?.data?.message ?? "Something went wrong"
              );
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            setFieldValue,
            isSubmitting,
          }) => {
            return (
              <div>
                <div className="mt-6 flex flex-col gap-8">
                  <CustomInput
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    errors={errors}
                    touched={touched}
                    label="Name*"
                    title={true}
                    placeholder={"Enter your full name"}
                  />

                  <CustomInput
                    value={values.number}
                    onChange={handleChange}
                    name="number"
                    errors={errors}
                    touched={touched}
                    label="Phone Number*"
                    title={true}
                    placeholder={"Enter your phone number"}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="mt-12 bg-primaryText text-white uppercase w-48 h-10 text-sm"
                >
                  {!isSubmitting ? "Request a Callback" : "Submit"}
                </button>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
