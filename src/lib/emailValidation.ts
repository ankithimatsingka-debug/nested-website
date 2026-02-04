// List of common disposable email domains
const DISPOSABLE_EMAIL_DOMAINS = [
  // Popular disposable email services
  'mailinator.com',
  'tempmail.com',
  'temp-mail.org',
  'guerrillamail.com',
  'guerrillamail.org',
  'guerrillamail.net',
  'sharklasers.com',
  'grr.la',
  'guerrillamailblock.com',
  '10minutemail.com',
  '10minutemail.net',
  'throwaway.email',
  'throwawaymail.com',
  'fakeinbox.com',
  'trashmail.com',
  'trashmail.net',
  'mailnesia.com',
  'maildrop.cc',
  'dispostable.com',
  'getnada.com',
  'nada.email',
  'tempail.com',
  'tempr.email',
  'discard.email',
  'discardmail.com',
  'spamgourmet.com',
  'mytrashmail.com',
  'mt2009.com',
  'thankyou2010.com',
  'trash2009.com',
  'mt2014.com',
  'mailcatch.com',
  'mailsac.com',
  'mohmal.com',
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',
  'cool.fr.nf',
  'jetable.fr.nf',
  'courriel.fr.nf',
  'moncourrier.fr.nf',
  'monemail.fr.nf',
  'monmail.fr.nf',
  'hide.biz.st',
  'mymail.infos.st',
  'getairmail.com',
  'dropmail.me',
  'mailexpire.com',
  'tempinbox.com',
  'tempmailaddress.com',
  'emailondeck.com',
  'burnermail.io',
  'inboxalias.com',
  'spambox.us',
  'spamfree24.org',
  'spamfree.eu',
  'spam4.me',
  'spoofmail.de',
  'spamex.com',
  'wegwerfemail.de',
  'emailtemporario.com.br',
  'crazymailing.com',
  'fakemailgenerator.com',
  'email-fake.com',
  'emailfake.com',
  'fakemail.net',
  'mintemail.com',
  'mintmail.com',
  'tempsky.com',
  'anonymbox.com',
  'binkmail.com',
  'bobmail.info',
  'chammy.info',
  'devnullmail.com',
  'disposableaddress.com',
  'dodgeit.com',
  'dodgit.com',
  'e4ward.com',
  'emailias.com',
  'emailigo.de',
  'emailinfive.com',
  'emz.net',
  'fastacura.com',
  'filzmail.com',
  'haltospam.com',
  'hatespam.org',
  'hidemail.de',
  'hochsitze.com',
  'incognitomail.org',
  'ipoo.org',
  'kasmail.com',
  'killmail.com',
  'klassmaster.com',
  'klassmaster.net',
  'kulturbetrieb.info',
  'kurzepost.de',
  'lhsdv.com',
  'lifebyfood.com',
  'lookugly.com',
  'mailbidon.com',
  'mailblocks.com',
  'mailmoat.com',
  'mailnull.com',
  'meltmail.com',
  'messagebeamer.de',
  'mierdamail.com',
  'mmmmail.com',
  'netzidiot.de',
  'nobulk.com',
  'noclickemail.com',
  'nogmailspam.info',
  'nomail.xl.cx',
  'nomail2me.com',
  'nomorespamemails.com',
  'nospam.ze.tc',
  'nospam4.us',
  'nospamfor.us',
  'nospammail.net',
  'notmailinator.com',
  'nowhere.org',
  'nowmymail.com',
  'objectmail.com',
  'obobbo.com',
  'onewaymail.com',
  'owlpic.com',
  'pookmail.com',
  'privymail.de',
  'proxymail.eu',
  'rcpt.at',
  'reallymymail.com',
  'recode.me',
  'recursor.net',
  'regbypass.com',
  'rhyta.com',
  'rklips.com',
  's0ny.net',
  'safe-mail.net',
  'safersignup.de',
  'safetymail.info',
  'safetypost.de',
  'shiftmail.com',
  'skeefmail.com',
  'slopsbox.com',
  'smellfear.com',
  'snakemail.com',
  'sneakemail.com',
  'sofort-mail.de',
  'sogetthis.com',
  'spam.la',
  'spamday.com',
  'spambog.com',
  'spambog.de',
  'spambog.ru',
  'spamcannon.com',
  'spamcannon.net',
  'spamcon.org',
  'spamcorptastic.com',
  'spamherelots.com',
  'spamhereplease.com',
  'spaml.com',
  'spaml.de',
  'spammotel.com',
  'spamobox.com',
  'spamoff.de',
  'spamslicer.com',
  'spamspot.com',
  'spamthis.co.uk',
  'spamthisplease.com',
  'supergreatmail.com',
  'supermailer.jp',
  'teewars.org',
  'teleworm.com',
  'teleworm.us',
  'temp.emeraldwebmail.com',
  'tempemail.co.za',
  'tempemail.net',
  'tempmailer.com',
  'tempomail.fr',
  'temporaryemail.net',
  'temporaryforwarding.com',
  'temporaryinbox.com',
  'thankyou2010.com',
  'thisisnotmyrealemail.com',
  'tradermail.info',
  'turual.com',
  'uggsrock.com',
  'upliftnow.com',
  'veryrealemail.com',
  'viditag.com',
  'webm4il.info',
  'wh4f.org',
  'whyspam.me',
  'willhackforfood.biz',
  'willselfdestruct.com',
  'wuzup.net',
  'wuzupmail.net',
  'xyzfree.net',
  'yuurok.com',
  'zehnminutenmail.de',
  'zippymail.info',
  'zoaxe.com',
];

/**
 * Validates email format using regex
 */
export const isValidEmailFormat = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Extracts domain from email address
 */
const getEmailDomain = (email: string): string => {
  const parts = email.trim().toLowerCase().split('@');
  return parts.length === 2 ? parts[1] : '';
};

/**
 * Checks if email is from a disposable domain
 */
export const isDisposableEmail = (email: string): boolean => {
  const domain = getEmailDomain(email);
  return DISPOSABLE_EMAIL_DOMAINS.includes(domain);
};

/**
 * Comprehensive email validation result
 */
export interface EmailValidationResult {
  isValid: boolean;
  error: string | null;
}

/**
 * Validates email with format check and disposable domain blocking
 */
export const validateEmail = (email: string): EmailValidationResult => {
  const trimmedEmail = email.trim();
  
  if (!trimmedEmail) {
    return { isValid: false, error: 'Please enter your email address' };
  }
  
  if (!isValidEmailFormat(trimmedEmail)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  if (isDisposableEmail(trimmedEmail)) {
    return { isValid: false, error: 'Please use a permanent email address (disposable emails are not allowed)' };
  }
  
  return { isValid: true, error: null };
};
