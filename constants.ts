import { TranslationContent } from './types';

export const APP_NAME = "Ambato";
export const SOCIAL_LINKS = {
  twitter: "#",
  instagram: "#",
  linkedin: "#"
};

export const TRANSLATIONS: Record<'es' | 'en', TranslationContent> = {
  es: {
    comingSoon: "Próximamente",
    title: "Redefiniendo el Vivir en Ambato",
    tagline: "Un Nuevo Estándar en Bienes Raíces. Prepárese para una colección exclusiva de oportunidades residenciales diseñadas para un estilo de vida exigente.",
    nav: {
      about: "Nosotros",
      contact: "Contacto"
    },
    newsletter: {
      placeholder: "Ingresa tu correo electrónico",
      button: "Notificarme",
      processing: "Procesando...",
      successTitle: "¡Estás en la lista!",
      successMessage: "Gracias por suscribirte. Te avisaremos tan pronto como lancemos.",
      registerAnother: "Registrar otro correo",
      errorEmail: "Por favor ingresa un correo válido.",
      subtext: "Sé el primero en conocer las propiedades exclusivas en Ambato."
    },
    features: [
      {
        title: "Listados Exclusivos",
        description: "Accede a una selección curada de las mejores propiedades de Ambato antes de que salgan al mercado."
      },
      {
        title: "Servicio Premium",
        description: "Experimenta un servicio de nivel conserje dedicado a encontrar tu santuario perfecto."
      },
      {
        title: "Inversión Segura",
        description: "Propiedades verificadas asegurando que tu inversión inmobiliaria sea segura y transparente."
      }
    ],
    footer: {
      rights: "Todos los derechos reservados.",
      location: "Ambato, Ecuador"
    }
  },
  en: {
    comingSoon: "Coming Soon",
    title: "Redefining Living in Ambato",
    tagline: "A New Standard in Real Estate. Prepare for an exclusive collection of residential opportunities designed for the discerning lifestyle.",
    nav: {
      about: "About",
      contact: "Contact"
    },
    newsletter: {
      placeholder: "Enter your email address",
      button: "Notify Me",
      processing: "Processing...",
      successTitle: "You're on the list!",
      successMessage: "Thank you for subscribing. We'll notify you as soon as we launch.",
      registerAnother: "Register another email",
      errorEmail: "Please enter a valid email address.",
      subtext: "Be the first to know about exclusive property listings in Ambato."
    },
    features: [
      {
        title: "Exclusive Listings",
        description: "Access a curated selection of Ambato's finest properties before they hit the market."
      },
      {
        title: "Premium Service",
        description: "Experience concierge-level service dedicated to finding your perfect sanctuary."
      },
      {
        title: "Secure Investment",
        description: "Verified properties ensuring your real estate journey is safe and transparent."
      }
    ],
    footer: {
      rights: "All rights reserved.",
      location: "Ambato, Ecuador"
    }
  }
};