import { z } from "zod";
import errorIcon from "../../public/assets/contact/desktop/icon-error.svg";
import IllustrationLocationsList from "../components/IllustrationLocationsList";
import { zodResolver } from "@hookform/resolvers/zod";
import validator from "validator";
import { useForm } from "react-hook-form";
import { useState } from "react";

const requriredMessage = "Can't be empty";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: requriredMessage })
    .min(3, { message: "Invalid name" })
    .max(20, { message: "Name can't have more than 20 charachters" }),
  email: z
    .string()
    .min(1, { message: requriredMessage })
    .email({ message: "Invalid email" }),
  phone: z
    .string({
      invalid_type_error: requriredMessage,
    })
    .min(1, { message: requriredMessage })
    .refine(validator.isMobilePhone, { message: "Invalid phone number" }),
  message: z
    .string()
    .min(1, { message: requriredMessage })
    .min(20, { message: "Message must have 20 Charachters at least" })
    .max(300, "Message can't have more than 300 Charachters"),
});

type FormData = z.infer<typeof schema>;

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [contactSucess, setContactSucess] = useState(false);

  function onSubmit(data: FormData) {
    setContactSucess(true);
  }
  return (
    <div className="contact-page container">
      <div className="contact-hero grid bg-peach">
        <div className="contact-hero-content col col-left flow">
          <h1 className="h1 txt-white">Contact Us</h1>
          <p className="txt-white">
            Ready to take it to the next level? Let’sj talk about your project
            or idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        {contactSucess ? (
          <div className="contact-sucess flow bg-white">
            <h1 className="h1 txt-peach">Thanks for reaching for us.</h1>
            <h2 className="h2 txt-peach">
              We will reply to you as soon as possible.
            </h2>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-fields col flow"
          >
            <div className="grid">
              <div className="input-field flex">
                <input
                  {...register("name", { required: true })}
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="flex">
                    {errors.name.message}
                    <img src={errorIcon} />
                  </span>
                )}
              </div>
            </div>
            <div className="grid">
              <div className="input-field flex">
                <input
                  {...register("email", { required: true })}
                  placeholder="Email Adress"
                />
                {errors.email && (
                  <span className="flex">
                    {errors.email.message}
                    <img src={errorIcon} />
                  </span>
                )}
              </div>
            </div>
            <div className="grid">
              <div className="input-field flex">
                <input
                  {...register("phone", { required: true })}
                  placeholder="Phone"
                  type="number"
                />
                {errors.phone && (
                  <span className="flex">
                    {errors.phone.message}
                    <img src={errorIcon} />
                  </span>
                )}
              </div>
            </div>
            <div className="grid">
              <div className="input-field flex">
                <textarea
                  {...register("message", { required: true })}
                  className="contact-message-input"
                  placeholder="Your Message"
                />
                {errors.message && (
                  <span className="flex">
                    {errors.message.message}
                    <img src={errorIcon} />
                  </span>
                )}
              </div>
            </div>
            <button className="contact-submit-btn btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>

      <IllustrationLocationsList />
    </div>
  );
};

export default ContactPage;
