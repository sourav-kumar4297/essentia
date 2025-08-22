import { useState } from "react";

export default function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [state, setState] = useState({ loading: false, ok: null, err: "" });

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, ok: null, err: "" });

    try {
      if (onSubmit) {
        await onSubmit(form); // use external handler if provided
      } else {
        // demo fallback — replace with your API route
        await new Promise((r) => setTimeout(r, 700));
      }

      setState({ loading: false, ok: true, err: "" });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setState({
        loading: false,
        ok: false,
        err: "Failed to send. Try again.",
      });
    }
  };

  return (
    <div className="relative">
      {/* soft grid backdrop */}
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_10%_10%,rgba(0,0,0,.04),transparent_40%),radial-gradient(circle_at_90%_0,rgba(0,0,0,.04),transparent_35%)] dark:bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,.06),transparent_40%),radial-gradient(circle_at_90%_0,rgba(255,255,255,.06),transparent_35%)]" />
      <div className="relative rounded-2xl border border-black/10 bg-white/1 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
        {/* square grid overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.06)_1px,transparent_1px)] bg-[size:22px_22px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)]" />
        </div>

        <form onSubmit={handleSubmit} className="relative space-y-5">
          <Field label="Full name">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Manu Arora"
              className="h-11 w-full rounded-md bg-white text-black placeholder:text-black/50 px-3 outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-black dark:bg-white/80"
            />
          </Field>

          <Field label="Email Address">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="support@essentiaenvironments.com"
              className="h-11 w-full rounded-md bg-white text-black placeholder:text-black/50 px-3 outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-black dark:bg-white/80"
            />
          </Field>

          <Field label="Phone Number">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className="h-11 w-full rounded-md bg-white text-black placeholder:text-black/50 px-3 outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-black dark:bg-white/80"
            />
          </Field>

          <Field label="Message">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              placeholder="Type your message here"
              className="w-full rounded-md bg-white text-black placeholder:text-black/50 px-3 py-2 outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-black dark:bg-white/80"
            />
          </Field>

          <button
            type="submit"
            disabled={state.loading}
            className="inline-flex items-center justify-center rounded-md bg-black px-5 py-2.5 font-semibold text-white shadow hover:bg-white hover:text-black hover:border-black border disabled:opacity-60"
          >
            {state.loading ? "Sending…" : "Submit"}
          </button>

          {state.ok && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Thanks! We’ll get back to you soon.
            </p>
          )}
          {state.ok === false && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {state.err || "Something went wrong."}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
    </div>
  );
}
