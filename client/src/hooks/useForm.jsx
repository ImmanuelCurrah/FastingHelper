import { useState } from "react";

export function useForm(defaultInput) {
  const [form, setForm] = useState(defaultInput);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return { handleChange, form, setForm };
}
