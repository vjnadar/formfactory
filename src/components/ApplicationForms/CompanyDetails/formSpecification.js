export const formSpecification = {
  title: "Add your company details",
  inputFields: [
    {
      type: "customImageUpload",
      label: "Profile picture",
      name: "imgUpload",
      initialValue: "",
      validation: {
        type: "text",
        requiredMessage: "Please upload an appropriate image.",
      },
    },
    {
      type: "text",
      name: "companyname",
      label: "Company Name",
      initialValue: "",
      validation: {
        type: "text",
        requiredMessage: "This field is required and must be filled.",
      },
    },
    {
      type: "email",
      name: "emailid",
      label: "Email id",
      initialValue: "",
      validation: {
        type: "email",
        invalidEmailMessage: "Please enter a valid email.",
        requiredMessage: "This field is required and must be filled.",
      },
    },
    {
      type: "text",
      name: "jobtitle",
      label: "Job Title",
      initialValue: "",
      validation: {
        type: "text",
        requiredMessage: "This field is required and must be filled.",
      },
    },
    {
      type: "number",
      name: "experience",
      label: "Years of experience",
      initialValue: "",
      validation: {
        type: "number",
        invalidNumberMessage: "Experience should be a positive number.",
        requiredMessage: "This number field is required and must be filled.",
      },
    },
    {
      type: "checkboxInline",
      name: "conditionsaccepted",
      label: "I accept the terms and condition.",
      initialValue: false,
      checkValue: "",
      validation: {
        type: "boolean",
        requiredMessage: "Please check this box.",
      },
    },
  ],
  buttons: {
    buttonSet: {
      setType: "defaultReverse",
      buttonNames: {
        OK: "Send OTP",
        Cancel: "Back",
      },
    },
  },
};
