import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const title = titleRef.current;
    if (title) {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <section id="home" className="section min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-6xl my-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left max-w-2xl mx-auto">
            <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 opacity-0 transform translate-y-8 transition-all duration-1000">
              {t('hero.greeting')} <span className="text-primary">David</span>, {t('hero.developer')} <span className="text-primary">{t('hero.role')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in max-w-md mx-auto md:mx-0" style={{ animationDelay: '1s' }}>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-colors">
                {t('hero.buttons.projects')}
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
                {t('hero.buttons.hire')}
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in max-w-md mx-auto" style={{ animationDelay: '0.7s' }}>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-6"></div>
              <img 
                src="/images/profile-image.jpg"
                alt="Profile" 
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;