import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import Form from "@rjsf/material-ui";
import { AjvError, IChangeEvent, ISubmitEvent } from "@rjsf/core";
import dataSchema from "./dataSchema";
import uiSchema from "./uiSchema";

const initData = {
  name: "Sir Earnest Hemingway",
  vegetarian: false,
  nationality: "Other",
  favoriteFoods: ["whiskey", "big game", "marlin", "spear fish"],
  vaccinations: [
    {
      brand: "Merck & Co., Inc",
      dose: 1,
      disease: "chickenpox",
    },
    {
      brand: "Pfizer",
      dose: 1,
      disease: "COVID",
    },
  ],
  occupation: "Teacher",
};

function App() {
  const [data, setData] = useState<any>(initData);
  const [errors, setErrors] = useState<AjvError[] | undefined>(undefined);
  const [submitCount, setSubmitCount] = useState<number>(0);

  const handleChange = ({ formData, errors }: IChangeEvent) => {
    setErrors(errors);
    setData(formData);
  };

  const handleSubmit = ({ formData, errors }: ISubmitEvent<any>) => {
    console.log("Submitted data: ", formData);
    console.log("With Errors: ", errors);
    setSubmitCount(submitCount + 1);
  };

  return (
    <div style={{ maxWidth: "900px", padding: "3rem", margin: "0 auto" }}>
      <Typography variant="h2" component="h1">
        Validation Bug
      </Typography>
      <div style={{ marginBottom: "2rem" }}>
        <Form
          schema={dataSchema}
          uiSchema={uiSchema}
          formData={data}
          onChange={handleChange}
          onSubmit={handleSubmit}
          noHtml5Validate
        >
          <Button type="submit" variant="contained" color="primary">
            Submit Form
          </Button>
        </Form>
      </div>

      <Typography variant="h3" component="h2" style={{ marginBottom: "1rem" }}>
        Number of Times Submitted
      </Typography>
      <Typography gutterBottom style={{ marginBottom: "2rem" }}>
        {submitCount}
      </Typography>
      <Typography variant="h3" component="h2" style={{ marginBottom: "1rem" }}>
        Is the form valid?
      </Typography>
      <Typography>{errors ? "No" : "Yes"}</Typography>
    </div>
  );
}

export default App;
