export const SERVICES = [
  'Removals',
  'Single Items',
  'House Clearances',
  'Waste Clearances',
  'Plumbing',
  'Transport / Courier',
  'Handy Man',
  'Gardening / Landscaping',
]

// UK number 07300 050696 in E.164 (no leading zero, no +), as required by wa.me
const WHATSAPP_NUMBER = '447300050696'

export function buildWhatsAppUrl(data) {
  const lines = [
    'New enquiry from the FJ Property Services website:',
    '',
    `Name: ${data.name?.trim() || '-'}`,
    `Phone: ${data.phone?.trim() || '-'}`,
    `Email: ${data.email?.trim() || '-'}`,
    `Service: ${data.service || 'Not specified'}`,
    `Message: ${data.message?.trim() || '-'}`,
  ]
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}
