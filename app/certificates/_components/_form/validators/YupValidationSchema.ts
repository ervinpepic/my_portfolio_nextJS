import * as Yup from "yup";

export const validationSchema = Yup.object({
  schoolName: Yup.string().required("Cannot be empty..").min(
    3,
    "School name is required and must be more than 3 chars length."
  ),
    title: Yup.string().required("Cannot be empty..").min(
      3,
      "Title is required and must be more than 3 chars length."
    ),
    subtitle: Yup.string().required("Cannot be empty..").min(
      3,
      "Subtitle is required and must be more than 3 chars length."
    ),
    description: Yup.string().required("Cannot be empty..").min(
      10,
      "Description must be at least 10 characters."
    ),
    url: Yup.string().required("Cannot be empty..").url("Please enter a valid url"),
});
