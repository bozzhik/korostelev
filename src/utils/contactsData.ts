type ContactsData = {
  address: Record<string, string>
  socials: Record<string, {label: string; prelink: string; link: string}>
}

export const contactsData: ContactsData = {
  address: {
    label: '— — —',
    link: 'https://yandex.ru/maps/-/CDh5QYPB',
  },
  socials: {
    ws: {
      label: 'WhatsApp',
      prelink: '+7 (962) 935-44-38',
      link: 'https://wa.me/+79629354438',
    },
    tg: {
      label: 'Telegram',
      prelink: '@maxim_attorney',
      link: 'https://t.me/maxim_attorney',
    },
    ml: {
      label: '— — —',
      prelink: 'maxim.korostelev@korostelev.legal',
      link: 'mailto:maxim.korostelev@korostelev.legal',
    },
  },
}
