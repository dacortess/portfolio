import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useDocumentMeta = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Update title
    document.title = t('metadata.title');

    // Update description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('metadata.description'));
    }
  }, [t, i18n.language]); // Re-run when language changes
};
