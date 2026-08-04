import { useState } from "react";

const SPLITFORMS_ENDPOINT = "https://splitforms.com/api/submit";
const ACCESS_KEY = "335b878808a04df889162ef244ef7a6e";

const initialFormData = {
  full_name: "",
  email_address: "",
  phone_number: "",
  inquiry_subject: "",
  message: "",
};

function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedFullName = formData.full_name.trim();
    const trimmedEmail = formData.email_address.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedFullName || !trimmedEmail || !trimmedMessage) {
      setStatus({
        type: "error",
        message: "Please add your name, email, and a short message so we can get back to you.",
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const params = new URLSearchParams();
      params.set("access_key", ACCESS_KEY);
      params.set("botcheck", "");
      params.set("full_name", trimmedFullName);
      params.set("email_address", trimmedEmail);
      params.set("phone_number", formData.phone_number.trim());
      params.set("inquiry_subject", formData.inquiry_subject.trim());
      params.set("message", trimmedMessage);

      const response = await fetch(SPLITFORMS_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: params.toString(),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setFormData(initialFormData);
        setStatus({
          type: "success",
          message: "Thanks, we got it! We’ll be in touch soon.",
        });
      } else {
        const fallbackMessage = data?.message || "Your message could not be sent right now. Please try again later.";
        setStatus({ type: "error", message: fallbackMessage });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Your message could not be sent right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-linear-to-br from-blue-50 via-white to-blue-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Let's Start Your Solar Journey
          </h2>
          <p className="text-base leading-8 text-gray-600 sm:text-lg">
            Ready to harness clean, renewable energy? Contact us today and discover how SunHour can transform your
            energy future.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/70 sm:p-8 lg:p-10"
        >
          {status.message ? (
            <div
              aria-live="polite"
              className={`rounded-lg border px-4 py-3 text-sm ${
                status.type === "error"
                  ? "border-rose-200 bg-rose-50 text-rose-700"
                  : "border-emerald-200 bg-emerald-50 text-emerald-700"
              }`}
            >
              {status.message}
            </div>
          ) : null}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="full_name" className="mb-2 block text-sm font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 outline-none transition hover:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="email_address" className="mb-2 block text-sm font-semibold text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                id="email_address"
                name="email_address"
                value={formData.email_address}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 outline-none transition hover:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone_number" className="mb-2 block text-sm font-semibold text-gray-800">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="09xx xxx xxxx"
              className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 outline-none transition hover:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="inquiry_subject" className="mb-2 block text-sm font-semibold text-gray-800">
              Subject
            </label>
            <select
              id="inquiry_subject"
              name="inquiry_subject"
              value={formData.inquiry_subject}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 outline-none transition hover:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="">Select an option</option>
              <option value="Residential Solar">Residential Solar</option>
              <option value="Commercial Solar">Commercial Solar</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-800">
              Tell us about your inquiry
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share details about your energy needs and goals"
              className="w-full resize-none rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 outline-none transition hover:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            ></textarea>
          </div>

          <input type="hidden" name="access_key" value={ACCESS_KEY} />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-600">
            <a
              href="mailto:gerry.divino@gmail.com"
              className="font-medium text-blue-600 transition hover:text-blue-700"
            >
              gerry.divino@gmail.com
            </a>
            <a href="tel:+639175307337" className="font-medium text-blue-600 transition hover:text-blue-700">
              +63 917 530 7337
            </a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-linear-to-r from-blue-600 to-blue-700 py-4 text-lg font-bold text-white transition-all hover:scale-[1.01] hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
