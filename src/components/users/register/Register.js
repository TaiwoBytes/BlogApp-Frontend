import React from 'react';
import { useFormik } from 'formik';
import { RegisterSchema } from '../../validation-schema/RegisterSchema';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: RegisterSchema,
  });
  return (
    <div>
      <div className="bg-yellow-600 h-screen flex justify-center">
        <div>
          <p className="text-xl font-bold text-gray-500 mt-[150px] ">
            Register account
          </p>
          <p className="font-bold text-white text-4xl mt-5 ">
            Create an account{' '}
          </p>
          <p className="font-bold text-white text-4xl">
            and start penning down
          </p>
          <p className="font-bold text-white text-4xl">your ideas</p>
        </div>

        <div className="bg-gray-600  h-[600px] w-[350px] border-1 rounded-[20px] mx-[80px] my-[50px]">
          <form onSubmit={formik.handleSubmit}>
            <p className="p-4 text-white mt-10">Register Account</p>
            <div className="border border-white rounded-[10px] bg-white mb-3 mx-5 py-0.5 px-2 my-5 ">
              <input
                className="outline-none w-[100%]"
                value={formik.values.firstName}
                onChange={formik.handleChange('firstName')}
                onBlur={formik.handleBlur('firstName')}
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="text-red-500 mx-6 my-0 text-[5px]">
              {formik.touched.firstName && formik.errors.firstName}
            </div>
            <div className="border border-white rounded-[10px] bg-white mx-5 py-0.5 px-2 my-10">
              <input
                className="outline-none w-[100%]"
                value={formik.values.lastName}
                onChange={formik.handleChange('lastName')}
                onBlur={formik.handleBlur('lastName')}
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="text-red-500 mx-6 my-0 text-[5px]">
              {formik.touched.lastName && formik.errors.lastName}
            </div>
            <div className="border border-white rounded-[10px] bg-white  mx-5 py-0.5 px-2 my-10">
              <input
                className="outline-none w-[100%]"
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="text-red-500 mx-6 my-0 text-[5px]">
              {formik.touched.email && formik.errors.email}
            </div>
            <div className="border border-white rounded-[10px] bg-white mx-5 py-0.5 px-2 my-10">
              <input
                className="outline-none w-[100%]"
                value={formik.values.password}
                onChange={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="text-red-500 mx-6 text-[5px]">
              {formik.touched.password && formik.errors.password}
            </div>
            <div className="flex justify-center my-10">
              <button className="border border-gray-900 rounded-[10px] text-white bg-gray-900 p-2 w-[100%] mx-5 hover:bg-gray-500 ">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
