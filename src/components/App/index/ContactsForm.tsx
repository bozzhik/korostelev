'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'
import {useForm} from 'react-hook-form'

import Link from 'next/link'
import Image from 'next/image'
import CrossDarkIcon from '$/cross-dark.svg'
import {buttonVariants} from '~/UI/Button'

export type TFormFields = {
  name: string
  phone: string
  email: string
  message: string
}

export default function ContactsForm() {
  const {register, handleSubmit, reset} = useForm<TFormFields>() // Добавьте reset сюда
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Отправить форму')
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
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send data')
      }

      await response.json()
      setButtonText('Форма отправлена')
      reset()
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
      setIsChecked(false)
      setTimeout(() => {
        setButtonText('Отправить форму')
      }, 1500)
    }
  }

  const boxInputClasses = 'grid w-full px-12 xl:px-7 py-8 xl:py-6 place-items-start border-[2px] border-background'
  const inputClasses = cn('block w-full text-[21px] sm:text-lg text-background placeholder:text-background', 'bg-transparent border-b-[2px] border-background/50', '!outline-none duration-200 hover:border-background focus-visible:border-background')

  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col h-full gap-7 sm:gap-5">
        <div className={boxInputClasses}>
          <input type="text" className={inputClasses} placeholder="Ваше имя" {...register('name', {required: true})} />
        </div>
        <div className={boxInputClasses}>
          <input type="tel" className={inputClasses} placeholder="Номер телефона" {...register('phone', {required: true})} />
        </div>
        <div className={boxInputClasses}>
          <input type="email" className={inputClasses} placeholder="Электронная почта" {...register('email', {required: true})} />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={`h-full ${boxInputClasses}`}>
            <textarea className={inputClasses} placeholder="Чем я могу помочь?" {...register('message')} rows={3} />

            <div className="flex items-center self-end space-x-2">
              <input id="link-checkbox" type="checkbox" className="w-4 h-4 border-transparent rounded accent-background" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
              <label htmlFor="link-checkbox" className="text-sm font-medium">
                Я согласен с{' '}
                <Link href="/privacy_policy" className="underline text-background/60 hover:no-underline">
                  политикой обработки данных
                </Link>
                .
              </label>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className={cn([buttonVariants.base, buttonVariants.solid], 'w-full', isSubmitting ? 'text-foreground/50' : '')}>
            <Image quality={100} className={cn('s-4 xl:s-3 group-hover:rotate-[45deg] sm:group-hover:rotate-0 duration-200 ease-in')} src={CrossDarkIcon} alt="" />
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  )
}
