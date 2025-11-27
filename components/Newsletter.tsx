import React, { useState, useCallback } from 'react';
import { SubscriptionStatus, NewsletterContent } from '../types';
import Button from './Button';
import Input from './Input';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { FORM_ENDPOINT } from '../constants';

interface NewsletterProps {
  content: NewsletterContent;
}

const Newsletter: React.FC<NewsletterProps> = ({ content }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubscriptionStatus>(SubscriptionStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage(content.errorEmail);
      setStatus(SubscriptionStatus.ERROR);
      return;
    }

    setStatus(SubscriptionStatus.LOADING);
    setErrorMessage('');

    // If FORM_ENDPOINT is configured, use it. Otherwise simulate.
    if (FORM_ENDPOINT && FORM_ENDPOINT.startsWith('http')) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ email: email })
        });

        if (response.ok) {
          setStatus(SubscriptionStatus.SUCCESS);
          setEmail('');
        } else {
          const data = await response.json();
          if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
            throw new Error(data["errors"].map((error: any) => error["message"]).join(", "));
          } else {
            throw new Error("Error al enviar el formulario.");
          }
        }
      } catch (error) {
        setStatus(SubscriptionStatus.ERROR);
        setErrorMessage("Hubo un problema enviando su correo. Por favor intente de nuevo.");
        console.error("Submission error:", error);
      }
    } else {
      // Simulation Mode (Default if no endpoint is configured)
      console.log("SIMULATION MODE: Email captured:", email);
      console.log("To collect real emails, configure FORM_ENDPOINT in constants.ts");
      
      setTimeout(() => {
        setStatus(SubscriptionStatus.SUCCESS);
        setEmail('');
      }, 1500);
    }
  }, [email, content.errorEmail]);

  if (status === SubscriptionStatus.SUCCESS) {
    return (
      <div className="animate-fade-in-up bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center backdrop-blur-md">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-12 h-12 text-green-400" />
        </div>
        <h3 className="text-xl font-serif text-white mb-2">{content.successTitle}</h3>
        <p className="text-gray-300">{content.successMessage}</p>
        <button 
          onClick={() => setStatus(SubscriptionStatus.IDLE)}
          className="mt-4 text-sm text-brand-gold hover:text-brand-goldHover underline"
        >
          {content.registerAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto animate-fade-in-up delay-200">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-grow">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="email"
              name="email" // Important for form services
              placeholder={content.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              disabled={status === SubscriptionStatus.LOADING}
            />
          </div>
        </div>
        <Button 
          type="submit" 
          isLoading={status === SubscriptionStatus.LOADING}
          loadingText={content.processing}
          className="w-full sm:w-auto"
        >
          {content.button}
        </Button>
      </div>
      {status === SubscriptionStatus.ERROR && (
        <div className="mt-3 flex items-center text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 mr-2" />
          {errorMessage}
        </div>
      )}
      <p className="mt-4 text-xs text-gray-500 text-center">
        {content.subtext}
      </p>
    </form>
  );
};

export default Newsletter;