import { t } from "i18next";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">{t('getInTouch.title')}</h2>
      <div className="max-w-md mx-auto">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/dacortess/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/davidccortes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.dacortess@unal.edu.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;