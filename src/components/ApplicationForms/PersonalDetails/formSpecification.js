export const formSpecification = {
  title: "Add your personal Details",
  inputFields: [
    {
      type: "text",
      name: "fullname",
      label: "Full Name",
      initialValue: "",
      validation: {
        type: "text",
        requiredMessage: "This field is required and must be filled.",
      },
    },
    {
      type: "radioButtonSet",
      name: "gender",
      initialValue: "",
      validation: {
        type: "radioButtonSet",
        requiredMessage: "Choose one of the options.",
      },
      legend: "Gender",
      options: [
        {
          type: "radio",
          name: "gender",
          label: "Male ",
          radioValue: "male",
        },
        {
          type: "radio",
          name: "gender",
          label: "Female ",
          radioValue: "female",
        },
        {
          type: "radio",
          name: "gender",
          label: "Other",
          radioValue: "other",
        },
      ],
    },
    {
      type: "select",
      name: "country",
      label: "Country",
      initialValue: "",
      validation: {
        type: "text",
        requiredMessage: "This field is required.",
      },
      options: [
        {
          value: "",
          displayValue: "Choose your country",
        },
        {
          value: "india",
          displayValue: "India",
        },
        {
          value: "usa",
          displayValue: "United States of America",
        },
        {
          value: "italy",
          displayValue: "Italy",
        },
      ],
    },
    {
      type: "select",
      name: "state",
      label: "State",
      initialValue: "",
      validation: {
        type: "text",
        requiredMessage: "This field is required.",
      },
      options: [
        {
          value: "",
          displayValue: "Choose your state",
        },
        {
          value: "tn",
          displayValue: "Tamil Nadu",
        },
        {
          value: "ap",
          displayValue: "Andra Pradhesh",
        },
        {
          value: "kl",
          displayValue: "Kerala",
        },
      ],
    },
    {
      type: "number",
      name: "phone",
      label: "Phone",
      initialValue: "",
      validation: {
        type: "number",
        invalidNumberMessage: "Enter a valid phone number",
        requiredMessage: "This field is required and must be filled.",
      },
    },
  ],
  buttons: {
    buttonSet: {
      setType: "default",
      buttonNames: {
        OK: "Next",
        Cancel: "Clear",
      },
    },
  },
};
