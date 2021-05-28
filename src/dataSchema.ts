import { JSONSchema7 } from "json-schema";

const dataSchema: JSONSchema7 = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },
    vegetarian: {
      type: "boolean",
    },
    favoriteFoods: {
      type: "array",
      items: {
        type: "string",
      },
    },
    birthDate: {
      type: "string",
      format: "date",
    },
    nationality: {
      type: "string",
      enum: ["DE", "IT", "JP", "US", "RU", "Other"],
    },
    vaccinations: {
      type: "array",
      items: {
        type: "object",
        properties: {
          brand: {
            type: "string",
            enum: [
              "Pfizer",
              "Moderna",
              "Johnson & Johnson",
              "Merck & Co., Inc",
            ],
          },
          dose: {
            type: "integer",
            minimum: 1,
          },
          disease: {
            type: "string",
          },
        },
      },
    },
    occupation: {
      type: "string",
    },
    postalCode: {
      type: "string",
      maxLength: 5,
    },
  },
  required: ["occupation", "nationality"],
};

export default dataSchema;
