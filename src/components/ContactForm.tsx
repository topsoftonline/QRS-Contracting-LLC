'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { isValidEmail, isValidPhone } from '@/lib/utils'
import type { ContactFormData } from '@/lib/types'

const PROJECT_TYPES = [
  'Irrigation Networks',
  'Recycled Water / TSE',
  'Potable Water Networks',
  'Sewerage & Drainage',
  'Emergency Repair',
  'SCADA / Flow Meters',
  'Civil Infrastructure',
  'Other',
]

interface ContactFormState {
  data: ContactFormData
  errors: Partial<Record<keyof ContactFormData, string>>
  submitted: boolean
  loading: boolean
  success: boolean
  message: string
}

const empty: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  message: '',
}

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>({
    data: empty,
    errors: {},
    submitted: false,
    loading: false,
    success: false,
    message: '',
  })

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {}

    if (!state.data.name.trim()) errors.name = 'Name is required'
    if (!state.data.email.trim()) {
      errors.email = 'Email is required'
    } else if (!isValidEmail(state.data.email)) {
      errors.email = 'Please enter a valid email'
    }
    if (!state.data.phone.trim()) {
      errors.phone = 'Phone is required'
    } else if (!isValidPhone(state.data.phone)) {
      errors.phone = 'Please enter a valid phone number'
    }
    if (!state.data.projectType.trim()) errors.projectType = 'Select a project type'
    if (!state.data.location.trim()) errors.location = 'Location is required'
    if (!state.data.message.trim()) errors.message = 'Message is required'

    setState((prev) => ({ ...prev, errors }))
    return Object.keys(errors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setState((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: value },
      errors: { ...prev.errors, [name]: undefined },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setState((prev) => ({ ...prev, loading: true }))

    const formData = new FormData()
    formData.append('access_key', 'e6272910-3a48-4067-af3e-f1f22f622677')
    formData.append('name', state.data.name)
    formData.append('email', state.data.email)
    formData.append('phone', state.data.phone)
    formData.append('project_type', state.data.projectType)
    formData.append('location', state.data.location)
    formData.append('message', state.data.message)
    formData.append(
      'subject',
      `QRS Enquiry: ${state.data.projectType} — ${state.data.location}`
    )
    formData.append('from_name', 'QRS Contracting L.L.C. Website')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setState({
          data: empty,
          errors: {},
          submitted: true,
          loading: false,
          success: true,
          message: 'Thank you! Our team will review your enquiry and respond shortly.',
        })

        setTimeout(() => {
          setState((prev) => ({ ...prev, submitted: false }))
        }, 5000)
      } else {
        setState((prev) => ({
          ...prev,
          loading: false,
          success: false,
          message: result.message || 'Something went wrong. Please try again.',
          submitted: true,
        }))
      }
    } catch {
      setState((prev) => ({
        ...prev,
        loading: false,
        success: false,
        message: 'An error occurred. Please try again later.',
        submitted: true,
      }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        <Input
          label="Name"
          name="name"
          placeholder="Your name"
          value={state.data.name}
          onChange={handleChange}
          error={state.errors.name}
          disabled={state.loading}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={state.data.email}
          onChange={handleChange}
          error={state.errors.email}
          disabled={state.loading}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        <Input
          label="Phone"
          name="phone"
          placeholder="+971 52 000 0000"
          value={state.data.phone}
          onChange={handleChange}
          error={state.errors.phone}
          disabled={state.loading}
          required
        />
        <Input
          label="Project Location"
          name="location"
          placeholder="e.g. Dubai, Nad Al Sheba"
          value={state.data.location}
          onChange={handleChange}
          error={state.errors.location}
          disabled={state.loading}
          required
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-semibold text-navy mb-1.5">
          Project Type <span className="text-red-500">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          value={state.data.projectType}
          onChange={handleChange}
          disabled={state.loading}
          required
          className={`w-full rounded border bg-white px-3 py-2.5 text-sm text-navy outline-none transition-smooth focus:border-gold focus:ring-1 focus:ring-gold ${
            state.errors.projectType ? 'border-red-400' : 'border-navy/20'
          }`}
        >
          <option value="">Select project type</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {state.errors.projectType && (
          <p className="mt-1 text-xs text-red-600">{state.errors.projectType}</p>
        )}
      </div>

      <Textarea
        label="Project Details"
        name="message"
        placeholder="Scope, timeline, standards required..."
        value={state.data.message}
        onChange={handleChange}
        error={state.errors.message}
        disabled={state.loading}
        required
      />

      <Button type="submit" size="lg" disabled={state.loading} className="w-full md:w-auto">
        {state.loading ? 'Sending...' : 'Submit Project Enquiry'}
      </Button>

      {state.submitted && (
        <div
          className={`p-4 rounded-lg ${
            state.success
              ? 'bg-green-100 text-green-800 border border-green-300'
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}
        >
          {state.message}
        </div>
      )}
    </form>
  )
}
