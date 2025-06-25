import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration - Replace with your actual values
      const serviceId = "service_rwi4d68";
      const templateId = "template_ooki5vv";
      const publicKey = "cGq1K_ye5qV2-Eg1_";

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: "Dirk", // Your name
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      reset(); // Clear the form
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about design and development.
                Drop me a line!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">
                    dirk.hubrecht@outlook.com
                  </p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/dirk-hubrecht-2b102b192/"
                className="block"
              >
                <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-muted-foreground">
                      Get in contact on LinkedIn!
                    </p>
                  </div>
                </div>
              </a>

              <a href="https://github.com/dirksmirk" className="block">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200">
                  <Github className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <p className="text-muted-foreground">
                      Check out my GitHub profile!
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="hover:shadow-lg transition-shadow duration-300 rounded-lg border border-border bg-card text-card-foreground shadow-sm relative">
            {/* Thank you message overlay */}
            {submitStatus === "success" ? (
              <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-lg flex items-center justify-center z-10 animate-fade-in">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Thanks for getting in touch!
                  </h3>
                  <p className="text-muted-foreground">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            ) : submitStatus === "error" ? (
              <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-lg flex items-center justify-center z-10 animate-fade-in">
                <div className="text-center">
                  <div className="text-6xl mb-4">😞</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Something went wrong with sending the email
                  </h3>
                  <p className="text-muted-foreground">
                    But please feel free to write to my email directly so we can get in touch!
                  </p>
                </div>
              </div>
            ) : null}

            <div
              className={`transition-all duration-300 ${
                submitStatus === "success" ? "blur-sm" : ""
              }`}
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Send a Message
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                      placeholder="Your name"
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                        errors.name
                          ? "border-red-500 bg-red-50"
                          : "border-input bg-background"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="your@email.com"
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                        errors.email
                          ? "border-red-500 bg-red-50"
                          : "border-input bg-background"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    placeholder="Project inquiry"
                    className={`flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                      errors.subject
                        ? "border-red-500 bg-red-50"
                        : "border-input bg-background"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    placeholder="Tell me about your project..."
                    className={`flex min-h-[120px] w-full rounded-md border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                      errors.message
                        ? "border-red-500 bg-red-50"
                        : "border-input bg-background"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white h-11 rounded-md px-8"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
