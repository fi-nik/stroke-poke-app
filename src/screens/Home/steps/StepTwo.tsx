import React, { useState } from "react";
import { Card } from "src/components/Card";
import { Options } from "src/components/options/Options";

export function StepTwo({
  sizeOptions,
  baseOptions,
  sauceOptions,
  otherIngredientOptions,
}) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const data = [
    {
      key: "size",
      title: "Pick a size",
      data: sizeOptions,
      multiselect: false,
    },
    {
      key: "base",
      title: "Pick the base",
      data: baseOptions,
      multiselect: false,
    },
    {
      key: "sauce",
      title: "Pick a sauce",
      data: sauceOptions,
      multiselect: false,
    },
    {
      key: "other",
      title: "Pick other ingredients",
      description: "Pick up to 5, 8 or 10 ingredients based on bowl size.",
      data: otherIngredientOptions,
      multiselect: true,
    },
  ];
  return (
    <Card>
      <Options
        options={data}
        onChange={(key, value) =>
          setSelectedOptions((prevState) => {
            if (key === "other") {
              return {
                ...prevState,
                [key]: {
                  ...prevState[key],
                  [value]: !(prevState[key] && prevState[key][value]),
                },
              };
            }
            return { ...prevState, [key]: value };
          })
        }
        selectedOptions={selectedOptions}
      />
    </Card>
  );
}
