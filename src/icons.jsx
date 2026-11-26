import React from 'react';

const paths = {
  Github: <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></>,
  Linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
  Mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></>,
  ArrowUpRight: <><path d="M7 17 17 7M7 7h10v10"/></>,
  ArrowRight: <><path d="M5 12h14M12 5l7 7-7 7"/></>,
  ArrowDown: <><path d="M12 5v14m-7-7 7 7 7-7"/></>,
  MapPin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  CalendarDays: <><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"/></>,
  ExternalLink: <><path d="M15 3h6v6M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
  ArrowLeft: <><path d="M19 12H5m7 7-7-7 7-7"/></>
};

function makeIcon(name) {
  return function Icon({ size = 18, className, strokeWidth = 1.8 }) {
    return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
  };
}
export const Github = makeIcon('Github');
export const Linkedin = makeIcon('Linkedin');
export const Mail = makeIcon('Mail');
export const ArrowUpRight = makeIcon('ArrowUpRight');
export const ArrowRight = makeIcon('ArrowRight');
export const ArrowDown = makeIcon('ArrowDown');
export const MapPin = makeIcon('MapPin');
export const CalendarDays = makeIcon('CalendarDays');
export const ExternalLink = makeIcon('ExternalLink');
export const ArrowLeft = makeIcon('ArrowLeft');
