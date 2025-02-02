import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import bildungDatenDE from '@/data/de/about/bildung.json';
import bildungDatenEN from '@/data/en/about/bildung.json';
import arbeitserfahrungDatenDE from '@/data/de/about/arbeitserfahrung.json';
import arbeitserfahrungDatenEN from '@/data/en/about/arbeitserfahrung.json';
import navbarDataDE from '@/data/de/navbar/navbarBig.json';
import navbarDataEN from '@/data/en/navbar/navbarBig.json';
import navbarDataSidebarDE from '@/data/de/navbar/navbarSmall.json';
import navbarDataSidebarEN from '@/data/en/navbar/navbarSmall.json';
import ehrenamtDataDE from '@/data/de/about/ehrenamt.json';
import ehrenamtDataEN from '@/data/en/about/ehrenamt.json';
import contactFormDE from '@/data/de/contact/contactForm.json';
import contactFormEN from '@/data/en/contact/contactForm.json';
import homeAboutTextDE from '@/data/de/home/about.json';
import homeAboutTextEN from '@/data/en/home/about.json';
import homeBlogTextDE from '@/data/de/home/blog.json';
import homeBlogTextEN from '@/data/en/home/blog.json';
import homeKontaktTextDE from '@/data/de/home/kontakt.json';
import homeKontaktTextEN from '@/data/en/home/kontakt.json';
import HomeLandingpageTextDE from '@/data/de/home/landingpage.json';
import HomeLandingpageTextEN from '@/data/en/home/landingpage.json';
import BlogTextDE from '@/data/de/blog/blog.json';
import BlogTextEN from '@/data/en/blog/blog.json';
import AboutHeadlineDE from '@/data/de/about/header.json';
import AboutHeadlineEN from '@/data/en/about/header.json';
import ContactHeadlineDE from '@/data/de/contact/header.json';
import ContactHeadlineEN from '@/data/en/contact/header.json';

const resources = {
  de: {
    translation: {
      bildungData: bildungDatenDE,
      aboutHeadline: AboutHeadlineDE,
      contactHeadline: ContactHeadlineDE,
      arbeitserfahrungData: arbeitserfahrungDatenDE,
      navbarData: navbarDataDE,
      navbarDataSidebar: navbarDataSidebarDE,
      ehrenamtData: ehrenamtDataDE,
      contactForm: contactFormDE,
      homeAboutText: homeAboutTextDE,
      homeBlogText: homeBlogTextDE,
      homeKontaktText: homeKontaktTextDE,
      homeLandingpageText: HomeLandingpageTextDE,
      blogText: BlogTextDE,
    },
  },
  en: {
    translation: {
      bildungData: bildungDatenEN,
      aboutHeadline: AboutHeadlineEN,
      contactHeadline: ContactHeadlineEN,
      arbeitserfahrungData: arbeitserfahrungDatenEN,
      navbarData: navbarDataEN,
      navbarDataSidebar: navbarDataSidebarEN,
      ehrenamtData: ehrenamtDataEN,
      contactForm: contactFormEN,
      homeAboutText: homeAboutTextEN,
      homeBlogText: homeBlogTextEN,
      homeKontaktText: homeKontaktTextEN,
      homeLandingpageText: HomeLandingpageTextEN,
      blogText: BlogTextEN,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
