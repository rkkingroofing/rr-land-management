'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { QuoteFormSchema, SERVICE_OPTIONS, type QuoteFormValues } from '@/lib/schema';
import { site } from '@/content/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputBase =
  'w-full bg-white border border-gray-100 px-4 py-3 text-base text-black placeholder:text-gray-300 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors';
const labelBase = 'block text-xs uppercase tracking-widewide font-semibold text-gray-600 mb-2';
const errorBase = 'mt-1.5 text-xs text-red-700';

export function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(QuoteFormSchema),
    mode: 'onTouched',
  });

  async function onSubmit(values: QuoteFormValues) {
    setStatus('submitting');
    setServerError('');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Something went wrong');
      }
      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setServerError(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white border-2 border-orange p-6 sm:p-8"
      >
        <div className="label-eyebrow mb-3">Quote Request Sent</div>
        <h3 className="font-display uppercase text-2xl mb-3">Got it — we&apos;ll be in touch.</h3>
        <p className="text-gray-600 mb-5">
          Thanks for reaching out. We&apos;ll review your project and get back to you fast.
        </p>
        <p className="text-sm text-gray-600">
          Need an answer right now? Call Ryan at{' '}
          <a
            href={`tel:${site.contact.primary.tel}`}
            className="text-orange font-semibold underline"
          >
            {site.contact.primary.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-xs uppercase tracking-widewide font-semibold text-orange hover:text-orange-dark"
        >
          ← Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white border border-gray-100 p-6 sm:p-8"
      aria-labelledby="quote-form-heading"
    >
      <h3 id="quote-form-heading" className="font-display uppercase text-2xl mb-1">
        Request a Quote
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        We&apos;ll get back to you fast. Required fields marked with *.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="sm:col-span-1">
          <label htmlFor="qf-name" className={labelBase}>
            Name *
          </label>
          <input
            id="qf-name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'qf-name-error' : undefined}
            className={inputBase}
            {...register('name')}
          />
          {errors.name && (
            <p id="qf-name-error" className={errorBase}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="qf-phone" className={labelBase}>
            Phone *
          </label>
          <input
            id="qf-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'qf-phone-error' : undefined}
            className={inputBase}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="qf-phone-error" className={errorBase}>
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-email" className={labelBase}>
            Email *
          </label>
          <input
            id="qf-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'qf-email-error' : undefined}
            className={inputBase}
            {...register('email')}
          />
          {errors.email && (
            <p id="qf-email-error" className={errorBase}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-address" className={labelBase}>
            Property Address / City
          </label>
          <input
            id="qf-address"
            type="text"
            autoComplete="street-address"
            placeholder="123 Mountain View Rd, Sevierville"
            className={inputBase}
            {...register('address')}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-service" className={labelBase}>
            Service Needed *
          </label>
          <select
            id="qf-service"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'qf-service-error' : undefined}
            className={inputBase}
            defaultValue=""
            {...register('service')}
          >
            <option value="" disabled>
              — Select —
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="qf-service-error" className={errorBase}>
              {errors.service.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-details" className={labelBase}>
            Project Details *
          </label>
          <textarea
            id="qf-details"
            rows={5}
            placeholder="Tell us about the job — size, timeline, anything we should know."
            aria-invalid={!!errors.details}
            aria-describedby={errors.details ? 'qf-details-error' : undefined}
            className={`${inputBase} resize-y`}
            {...register('details')}
          />
          {errors.details && (
            <p id="qf-details-error" className={errorBase}>
              {errors.details.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-source" className={labelBase}>
            How did you hear about us?
          </label>
          <input
            id="qf-source"
            type="text"
            placeholder="Optional"
            className={inputBase}
            {...register('source')}
          />
        </div>

        {/* Honeypot — hidden from real users, bots will fill it */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="qf-website">Website</label>
          <input
            id="qf-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('website')}
          />
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-5 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
          {serverError || 'Something went wrong. Please try again or call us directly.'}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Request Quote'}
      </button>

      <p className="mt-4 text-xs text-gray-600 text-center">
        Or call Ryan directly:{' '}
        <a
          href={`tel:${site.contact.primary.tel}`}
          className="text-orange font-semibold"
        >
          {site.contact.primary.phone}
        </a>
      </p>
    </form>
  );
}
