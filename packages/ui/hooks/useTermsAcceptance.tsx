import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const isProduction = process.env.NODE_ENV === 'production';

const useTermsAcceptance = () => {
  // set true as default to avoid pop-in
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [cookies, setCookie] = useCookies(['terms_cookie']);

  useEffect(() => {
    if (cookies.terms_cookie !== 'accepted') {
      setTermsAccepted(false);
    }
  }, [cookies.terms_cookie]);

  const handleAcceptTerms = useCallback(() => {
    setTermsAccepted(true);
    setCookie('terms_cookie', 'accepted', { path: '/', domain: isProduction ? '.samurai.financial' : undefined });
  }, [setCookie]);

  return { termsAccepted, handleAcceptTerms };
};

export { useTermsAcceptance };
