import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdMail, MdPerson, MdAlternateEmail, MdChat, MdSend, MdSchedule, MdVerified, MdSupportAgent } from 'react-icons/md';
import '../styles/contact.css'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
      publicKey: EMAILJS_PUBLIC_KEY,
    })
      .then(
        () => {
          /* console.log('SUCCESS!'); */
          alert('Email enviado con éxito!');
          form.current.reset(); // Optional: Clear form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again.');
        },
      );
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-pattern">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider uppercase rounded-full" 
                style={{backgroundColor: 'var(--edu-light)', color: 'var(--edu-darkest)'}}>
            Contacto
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" 
              style={{color: 'var(--edu-darkest)'}}>
            Hablemos de <span style={{color: 'var(--edu-accent)'}}>educación</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" 
             style={{color: 'var(--edu-dark)'}}>
            ¿Tenés dudas, sugerencias o querés conocer más? Escribinos y te respondemos a la brevedad
          </p>
        </div>
      </section>

      {/* Formulario Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className='w-full bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border-2 shadow-soft-xl'
            style={{borderColor: 'var(--edu-light)'}}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" 
                   style={{backgroundColor: 'var(--edu-accent)'}}>
                <MdMail className="text-2xl text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold" 
                  style={{color: 'var(--edu-darkest)'}}>
                Envíanos un mensaje
              </h2>
            </div>
            
            <div className="mb-6 formGroup">
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold mb-2" 
                     style={{color: 'var(--edu-dark)'}}>
                <MdPerson className="text-base" style={{color: 'var(--edu-mid)'}} />
                Nombre
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                placeholder="Nombre completo" 
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                style={{
                  borderColor: 'var(--edu-lightest)',
                  color: 'var(--edu-darkest)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--edu-accent)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--edu-lightest)'}
              />
            </div>
            
            <div className="mb-6 formGroup">
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold mb-2" 
                     style={{color: 'var(--edu-dark)'}}>
                <MdAlternateEmail className="text-base" style={{color: 'var(--edu-mid)'}} />
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                placeholder="email@ejemplo.com" 
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                style={{
                  borderColor: 'var(--edu-lightest)',
                  color: 'var(--edu-darkest)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--edu-accent)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--edu-lightest)'}
              />
            </div>
            
            <div className="mb-8 formGroup">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold mb-2" 
                     style={{color: 'var(--edu-dark)'}}>
                <MdChat className="text-base" style={{color: 'var(--edu-mid)'}} />
                Mensaje
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={6}
                required
                placeholder="Contanos qué necesitás o qué te gustaría saber..." 
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all resize-none text-sm sm:text-base"
                style={{
                  borderColor: 'var(--edu-lightest)',
                  color: 'var(--edu-darkest)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--edu-accent)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--edu-lightest)'}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
              style={{backgroundColor: 'var(--edu-accent)'}}
            >
              <MdSend />
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Info adicional section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-pattern">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            <div className="bg-white p-6 rounded-2xl shadow-soft-xl text-center border-2" 
                 style={{borderColor: 'var(--edu-lightest)'}}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" 
                   style={{backgroundColor: 'rgba(231, 111, 81, 0.1)'}}>
                <MdSchedule className="text-3xl" style={{color: 'var(--edu-accent)'}} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: 'var(--edu-darkest)'}}>
                Respuesta Rápida
              </h3>
              <p className="text-sm" style={{color: 'var(--edu-dark)'}}>
                Respondemos lo antes posible
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft-xl text-center border-2" 
                 style={{borderColor: 'var(--edu-lightest)'}}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" 
                   style={{backgroundColor: 'rgba(163, 177, 138, 0.2)'}}>
                <MdVerified className="text-3xl" style={{color: 'var(--edu-mid)'}} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: 'var(--edu-darkest)'}}>
                100% Confiable
              </h3>
              <p className="text-sm" style={{color: 'var(--edu-dark)'}}>
                Tus datos están seguros y protegidos
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft-xl text-center border-2" 
                 style={{borderColor: 'var(--edu-lightest)'}}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" 
                   style={{backgroundColor: 'rgba(244, 162, 97, 0.2)'}}>
                <MdSupportAgent className="text-3xl" style={{color: 'var(--edu-accent-light)'}} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: 'var(--edu-darkest)'}}>
                Soporte Dedicado
              </h3>
              <p className="text-sm" style={{color: 'var(--edu-dark)'}}>
                Un equipo listo para ayudarte
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};