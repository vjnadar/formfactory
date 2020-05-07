export const formSpecification = {
  title: "Enter your OTP",
  inputFields: [
    {
      type: "validatorTextbox",
      legend: "Enter your code:",
      values: [
        {
          name: "txtboxA",
          initialValue: "",
          validation: {
            type: "number",
            invalidNumberMessage: "Enter a positive number",
            requiredMessage: "This field is required.",
          },
        },
        {
          name: "txtboxB",
          initialValue: "",
          validation: {
            type: "number",
            invalidNumberMessage: "Enter a positive number",
            requiredMessage: "This field is required.",
          },
        },
        {
          name: "txtboxC",
          initialValue: "",
          validation: {
            type: "number",
            invalidNumberMessage: "Enter a positive number",
            requiredMessage: "This field is required.",
          },
        },
        {
          name: "txtboxD",
          initialValue: "",
          validation: {
            type: "number",
            invalidNumberMessage: "Enter a positive number",
            requiredMessage: "This field is required.",
          },
        },
      ],
    },
  ],
  buttons: {
    buttonSet: {
      setType: "defaultReverse",
      buttonNames: {
        OK: "Verify",
        Cancel: "Back",
      },
    },
  },
};
