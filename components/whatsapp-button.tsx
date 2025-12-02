'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton() {
    return (
        <FloatingWhatsApp
            phoneNumber="5561981009362"
            accountName="Pixeat"
            statusMessage="Responde em alguns minutos"
            chatMessage="Olá! 👋 Como posso ajudar você?"
            placeholder="Digite uma mensagem..."
            allowEsc
            notification
            notificationDelay={60000} // 60 segundos
            notificationSound
        />
    )
}
