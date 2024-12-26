'use client'

import type {LabelsData} from '~~/index/Contacts'

import {cn} from '@/lib/utils'
import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {Link} from '@/i18n/routing'
import Image from 'next/image'
import CrossDarkIcon from '$/cross-dark.svg'
import {buttonVariants} from '~/UI/Button'

export type TFormFields = {
  name: string
  phone: string
  email: string
  message: string
}

export default function ContactsForm({labels}: {labels: LabelsData}) {
  const {register, handleSubmit, reset} = useForm<TFormFields>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState(labels.button[0])
  const [isChecked, setIsChecked] = useState(false)

  const onSubmit = async (data: TFormFields) => {
    setIsSubmitting(true)
    setIsChecked(true)

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send data')
      }

      await response.json()
      setButtonText(labels.button[1])
      reset()
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
      setIsChecked(false)
      setTimeout(() => {
        setButtonText(labels.button[0])
      }, 1500)
    }
  }

  const boxInputClasses = 'grid w-full px-12 xl:px-7 sm:px-5 py-8 xl:py-6 place-items-start border-[2px] border-background'
  const inputClasses = cn('block w-full text-[21px] sm:text-lg text-background placeholder:text-background', 'bg-transparent border-b-[2px] border-background/50', '!outline-none duration-200 hover:border-background focus-visible:border-background')

  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col h-full gap-7 sm:gap-5">
        <div className={boxInputClasses}>
          <input type="text" className={inputClasses} placeholder={labels.name} {...register('name', {required: true})} />
        </div>
        <div className={boxInputClasses}>
          <input type="tel" className={inputClasses} placeholder={labels.tel} {...register('phone', {required: true})} />
        </div>
        <div className={boxInputClasses}>
          <input type="email" className={inputClasses} placeholder={labels.email} {...register('email', {required: true})} />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={`h-full sm:space-y-3.5 ${boxInputClasses}`}>
            <textarea className={inputClasses} placeholder={labels.message} {...register('message')} rows={3} />

            <div className="flex items-center self-end gap-2">
              <input id="link-checkbox" type="checkbox" className="border-transparent rounded s-4 sm:s-3 accent-background" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
              <label htmlFor="link-checkbox" className="text-sm font-medium sm:text-xs">
                {labels.policy[0]}{' '}
                <Link href="/privacy-policy" className="underline text-background/60 hover:no-underline">
                  {labels.policy[1]}
                </Link>
              </label>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className={cn([buttonVariants.base, buttonVariants.solid], 'w-full uppercase font-medium', isSubmitting && 'text-foreground/60')}>
            <Image quality={100} className={cn('s-4 xl:s-3 group-hover:rotate-[45deg] sm:group-hover:rotate-0 duration-200 ease-in', isSubmitting && 'opacity-60')} src={CrossDarkIcon} alt="" />
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  )
}
