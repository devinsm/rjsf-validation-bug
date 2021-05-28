import { JSONSchema7 } from "json-schema";

const dataSchema: JSONSchema7 = {
  type: "object",
  properties: {
    magicNumber: {
      type: "integer",
      title: "Magic Number",
      minimum: 1,
    },
  },
  required: ["magicNumber"],
};

export default dataSchema;
