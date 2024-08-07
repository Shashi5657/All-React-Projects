import React from "react";
import { useState } from "react";
import FormUserDetails from "./FormUserDetails";

const UserForm = () => {
  const [details, setDetails] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  const nextStep = () => {
    setDetails((prevValues) => ({ ...prevValues, step: prevValues.step + 1 }));
  };

  const prevStep = () => {
    setDetails((prevValues) => ({ ...prevValues, step: prevValues.step - 1 }));
  };

  const handleChange = (input, e) => {
    setDetails((prevValues) => ({ ...prevValues, [input]: e.target.value }));
  };

  const { step } = details;
  const { firstName, lastName, email, occupation, city, bio } = details;
  const values = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );

    case 2:
      return <h1> Form Personal Details</h1>;
    case 3:
      return <h1> Confirm</h1>;
    case 4:
      return <h1> FSuccess</h1>;
  }
};

export default UserForm;
