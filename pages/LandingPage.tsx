import React from 'react';
import Hero from '../components/Hero';
import Demo from '../components/Demo';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Demo />
      <FAQSection />
      <ContactForm />
    </>
  );
};

export default LandingPage;