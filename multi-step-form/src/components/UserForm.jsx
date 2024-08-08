import { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

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
          handleChange={handleChange}
          values={values}
        />
      );

    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 4:
      return <Success />;
    default:
      return <h1>No page found</h1>;
  }
};

export default UserForm;
