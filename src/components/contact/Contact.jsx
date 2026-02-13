import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const inputClass = 'w-full max-w-md px-4 py-3 bg-surface-input border border-gray-600 rounded-lg text-[#e5e5e5] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-200'
const labelClass = 'block text-[#b8b6b6] text-sm font-medium mb-1'

const Contact = () => {
  const formRef = useRef(null)
  const { t } = useTranslation()
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(null)
    const form = formRef.current
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="flex flex-col items-center py-16 md:py-20 scroll-mt-20" id="contact">
      <h2 className="text-[#dfdede] text-3xl md:text-5xl text-center font-medium mb-10">
        {t('contact')}
      </h2>
      <form
        ref={formRef}
        className="flex flex-col items-center w-full max-w-md"
        action="https://formspree.io/f/meqyrzrv"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="w-full mb-4">
          <label htmlFor="contact-name" className={labelClass}>
            {t('name')}
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder={t('name')}
            className={inputClass}
            required
          />
        </div>
        <div className="w-full mb-4 mt-4">
          <label htmlFor="contact-email" className={labelClass}>
            {t('e-mail')}
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="your@email.com"
            className={inputClass}
            required
          />
        </div>
        <div className="w-full mb-4 mt-4">
          <label htmlFor="contact-message" className={labelClass}>
            {t('message')}
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder={t('message')}
            className={`${inputClass} h-32 resize-y min-h-[120px]`}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-6 px-8 py-3 rounded-lg bg-accent text-black font-medium hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
        >
          {t('submit')}
        </button>
        {status === 'success' && (
          <p className="mt-4 text-accent text-sm" role="status">
            {t('messageSent')}
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400 text-sm" role="alert">
            {t('sendError')}
          </p>
        )}
      </form>
    </section>
  )
}

export default Contact
