/* eslint-disable react/prop-types */

import { Button } from "../ui/button";
import FormControls from "./form-controls";

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false,
}) {
  return (
    <form onSubmit={handleSubmit} className="mt-8">
      {/* render form controls here */}
      <FormControls 
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button disabled={isButtonDisabled} type="submit" className="mt-5 w-full bg-neutral-600">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;