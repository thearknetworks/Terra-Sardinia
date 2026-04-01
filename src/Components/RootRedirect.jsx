import React from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RootRedirect = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage || 'en';

  return <Navigate to={`/${currentLang}/home`} replace />;
};

export default RootRedirect;
