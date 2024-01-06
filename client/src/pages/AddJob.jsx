import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import { useOutletContext } from "react-router-dom";
import { Form, redirect } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/jobs", data);
    toast.success("Job added successfully");
    return redirect("all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddJob = () => {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add Job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" placeholder="Position" />
          <FormRow type="text" name="company" placeholder="Company" />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            defaultValue={user.location}
          />

          <FormRowSelect
            name="jobStatus"
            labelText="Job Status"
            list={Object.values(JOB_STATUS)}
            defaultValue={JOB_STATUS.PENDING}
          />

          <FormRowSelect
            name="jobType"
            labelText="Job Type"
            list={Object.values(JOB_TYPE)}
            defaultValue={JOB_TYPE.FULL_TIME}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddJob;
