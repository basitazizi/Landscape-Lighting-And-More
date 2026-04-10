import { useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { services } from "../data/site";

const steps = ["Service", "Project", "Schedule", "Contact"];

type FormState = {
  service: string;
  propertyType: string;
  description: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
};

const initialForm: FormState = {
  service: services[0].title,
  propertyType: "Home",
  description: "",
  date: "",
  time: "",
  name: "",
  phone: "",
  email: "",
};

type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

function TextInput({ label, value, onChange, type = "text" }: TextInputProps) {
  return (
    <label className="text-sm text-white/80">
      {label}
      <input
        className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-black px-4 text-white outline-none transition placeholder:text-white/35 focus:border-gold"
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default function Booking() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);

  const progress = useMemo(() => `${((step + 1) / steps.length) * 100}%`, [step]);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Booking"
          title="Request a free consultation."
          text="A few details help us prepare a better night demonstration."
          align="center"
        />

        <div className="mt-12 rounded-lg border border-white/10 bg-white/[0.025] p-4 shadow-[0_0_80px_rgba(255,213,79,0.08)] sm:p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase text-white/60">
              {steps.map((label, index) => (
                <button
                  key={label}
                  type="button"
                  className={`rounded-lg px-2 py-2 transition ${
                    index === step ? "bg-gold/10 text-gold" : "text-white/45 hover:text-white"
                  }`}
                  onClick={() => setStep(index)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gold shadow-[0_0_20px_rgba(255,213,79,0.8)] transition-all duration-300"
                style={{ width: progress }}
              />
            </div>
          </div>

          <form className="min-h-[420px]" onSubmit={(event) => event.preventDefault()}>
            {step === 0 ? (
              <div>
                <h2 className="text-2xl font-semibold text-white">Choose service</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <label
                      key={service.title}
                      className={`cursor-pointer rounded-lg border p-5 transition ${
                        form.service === service.title
                          ? "border-gold bg-gold/10 shadow-[0_0_28px_rgba(255,213,79,0.16)]"
                          : "border-white/10 bg-white/[0.02] hover:border-gold/40"
                      }`}
                    >
                      <input
                        className="sr-only"
                        type="radio"
                        name="service"
                        value={service.title}
                        checked={form.service === service.title}
                        onChange={(event) => update("service", event.target.value)}
                      />
                      <span className="font-semibold text-white">{service.title}</span>
                      <span className="mt-2 block text-sm leading-6 text-soft">{service.short}</span>
                    </label>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 1 ? (
              <div>
                <h2 className="text-2xl font-semibold text-white">Project details</h2>
                <div className="mt-6 grid gap-4">
                  <label className="text-sm text-white/80">
                    Type
                    <select
                      className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-black px-4 text-white outline-none transition focus:border-gold"
                      value={form.propertyType}
                      onChange={(event) => update("propertyType", event.target.value)}
                    >
                      <option>Home</option>
                      <option>Business</option>
                    </select>
                  </label>
                  <label className="text-sm text-white/80">
                    Short description
                    <textarea
                      className="mt-2 min-h-36 w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-gold"
                      placeholder="Tell us about the area, existing lighting, or goal for the project."
                      value={form.description}
                      onChange={(event) => update("description", event.target.value)}
                    />
                  </label>
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div>
                <h2 className="text-2xl font-semibold text-white">Date and time</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="text-sm text-white/80">
                    Date
                    <input
                      className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-black px-4 text-white outline-none transition focus:border-gold"
                      type="date"
                      value={form.date}
                      onChange={(event) => update("date", event.target.value)}
                    />
                  </label>
                  <label className="text-sm text-white/80">
                    Time
                    <input
                      className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-black px-4 text-white outline-none transition focus:border-gold"
                      type="time"
                      value={form.time}
                      onChange={(event) => update("time", event.target.value)}
                    />
                  </label>
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div>
                <h2 className="text-2xl font-semibold text-white">Contact information</h2>
                <div className="mt-6 grid gap-4">
                  <TextInput label="Name" value={form.name} onChange={(value) => update("name", value)} />
                  <TextInput
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={(value) => update("phone", value)}
                  />
                  <TextInput
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(value) => update("email", value)}
                  />
                </div>
              </div>
            ) : null}
          </form>

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              className="min-h-12 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold uppercase text-white transition hover:border-gold/60 hover:text-gold disabled:cursor-not-allowed disabled:opacity-35"
              disabled={step === 0}
              onClick={() => setStep((value) => Math.max(0, value - 1))}
            >
              Back
            </button>
            {step < steps.length - 1 ? (
              <button
                type="button"
                className="min-h-12 rounded-lg border border-gold bg-gold px-5 py-3 text-sm font-semibold uppercase text-black shadow-[0_0_34px_rgba(255,213,79,0.34)] transition hover:border-white hover:bg-white"
                onClick={() => setStep((value) => Math.min(steps.length - 1, value + 1))}
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                className="min-h-12 rounded-lg border border-gold bg-gold px-5 py-3 text-sm font-semibold uppercase text-black shadow-[0_0_34px_rgba(255,213,79,0.34)] transition hover:border-white hover:bg-white"
              >
                Request Consultation
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
