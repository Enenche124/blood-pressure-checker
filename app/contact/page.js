import ContactForm from "../../componentc/contactform";

export default function ContactPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-lg mb-6 text-center">
          We'd love to hear from you. Fill out the form below:
        </p>
        <ContactForm />
      </div>
    );
  }
