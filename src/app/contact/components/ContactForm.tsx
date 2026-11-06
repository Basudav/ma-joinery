"use client";

import { useState } from "react";
import { FormSuccess } from "@/app/contact/components/FormSuccess";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { buildWhatsAppUrl } from "@/lib/contact";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const fieldClass =
  "h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500";

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  }
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email, or leave this blank.";
  }
  if (!values.service) {
    errors.service = "Please choose a service.";
  }
  if (!values.message.trim()) {
    errors.message = "Please tell me a little about the work.";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    // Open WhatsApp with a prefilled message ready to send.
    window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return <FormSuccess />;
  }

  const serviceOptions = [
    ...services.map((service) => service.title),
    "Not sure / something else",
  ];

  return (
    <form onSubmit={onSubmit} noValidate className="min-w-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className="mb-1.5 block text-base font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-sm text-brand-700">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className="min-w-0">
          <label htmlFor="phone" className="mb-1.5 block text-base font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1 text-sm text-brand-700">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-4 min-w-0">
        <label htmlFor="email" className="mb-1.5 block text-base font-medium text-ink">
          Email <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${fieldClass} break-words`}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1 text-sm text-brand-700">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div className="mt-4 min-w-0">
        <label htmlFor="service" className="mb-1.5 block text-base font-medium text-ink">
          Service
        </label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(event) => update("service", event.target.value)}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={fieldClass}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service ? (
          <p id="service-error" className="mt-1 text-sm text-brand-700">
            {errors.service}
          </p>
        ) : null}
      </div>
      <div className="mt-4 min-w-0">
        <label htmlFor="message" className="mb-1.5 block text-base font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="min-h-36 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-brand-700">
            {errors.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        Send enquiry
      </Button>
      <p className="mt-3 text-sm text-ink-soft">
        This opens WhatsApp with your message ready to send.
      </p>
    </form>
  );
}
