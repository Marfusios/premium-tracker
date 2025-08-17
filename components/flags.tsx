
import React from 'react';

export const UKFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" {...props}>
        <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
        <clipPath id="b"><path d="M30 15h30v15zv15h-30zH0z"/></clipPath>
        <g clipPath="url(#a)">
            <path d="M0 0v30h60V0z" fill="#00247d"/>
            <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
            <path d="M0 0l60 30m0-30L0 30" clipPath="url(#b)" stroke="#cf142b" strokeWidth="4"/>
            <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30 0v30M0 15h60" stroke="#cf142b" strokeWidth="6"/>
        </g>
    </svg>
);

export const CzechFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" {...props}>
        <path fill="#fff" d="M0 0h60v30H0z"/>
        <path fill="#d7141a" d="M0 15h60v15H0z"/>
        <path fill="#11457e" d="M0 0l30 15L0 30z"/>
    </svg>
);

export const GermanFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" {...props}>
        <path d="M0 0h5v3H0z"/>
        <path fill="#D00" d="M0 1h5v2H0z"/>
        <path fill="#FFCE00" d="M0 2h5v1H0z"/>
    </svg>
);

export const SpainFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" {...props}>
        <path fill="#c60b1e" d="M0 0h600v400H0z"/>
        <path fill="#ffc400" d="M0 100h600v200H0z"/>
        <g transform="translate(135.24 153.33) scale(.33333)">
            <g fill="#c60b1e">
                <path d="M331.33 283.33v-230c0-12.5-9.17-21.67-21.67-21.67h-115S185.5 20.83 173.33 4.17 121.67 15 121.67 15s-21.67-15-51.67-5.83-50 45-50 45v229.16z"/>
                <path d="M250 401.67c-50 0-50-33.34-50-33.34V350h100v18.33s0 33.34-50 33.34z"/>
            </g>
            <path fill="#ffc400" d="M228.33 133.33V87.5h-56.66v45.83h-25V87.5h-56.67v45.83h-25V87.5H8.33v45.83H0v125h25v45.84h66.67v-45.84h25v45.84h56.66v-45.84h25v45.84h66.67v-45.84H300v-125h-71.67z"/>
            <g fill="#c60b1e">
                <path d="M66.67 133.33V87.5H8.33v45.83zM171.67 133.33V87.5h-56.67v45.83zM66.67 258.33v-45.83H8.33v45.83zM171.67 258.33v-45.83h-56.67v45.83z"/>
            </g>
            <path fill="#9c27b0" d="M228.33 87.5h-25v216.67h25V87.5zM291.67 87.5h-25v216.67h25V87.5z"/>
            <g fill="#ad1519">
                <path d="M150 25a15 15 0 0 1-28.1 4.17 15 15 0 0 1 2.5-18.34A15 15 0 0 1 150 25z"/>
                <path d="M150 350a50 50 0 0 1-100 0z"/>
            </g>
            <g fill="#ffc400">
                <path d="M150 25a15 15 0 0 1-15 15 15 15 0 0 1-15-15 15 15 0 0 1 15-15 15 15 0 0 1 15 15z"/>
                <path d="M150 350a50 50 0 0 1-50-50 50 50 0 0 1 50-50v100z"/>
            </g>
            <path fill="#757575" d="M136.67 15h13.33v10.83h-13.33z"/>
            <path fill="#ffc400" d="M150 0a16.67 16.67 0 0 1 16.67 16.67h-33.34A16.67 16.67 0 0 1 150 0z"/>
        </g>
    </svg>
);

export const FrenchFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" {...props}>
        <path fill="#0055A4" d="M0 0h1v2H0z"/>
        <path fill="#fff" d="M1 0h1v2H1z"/>
        <path fill="#EF4135" d="M2 0h1v2H2z"/>
    </svg>
);

export const PolishFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5" {...props}>
        <path fill="#fff" d="M0 0h8v5H0z"/>
        <path fill="#dc143c" d="M0 2.5h8v2.5H0z"/>
    </svg>
);

export const CroatianFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" {...props}>
        <path fill="#FF0000" d="M0 0h5v1H0z"/>
        <path fill="#FFFFFF" d="M0 1h5v1H0z"/>
        <path fill="#0000FF" d="M0 2h5v1H0z"/>
        <g transform="translate(2.5 1.5) scale(0.1)">
            <path fill="#FF0000" d="M-2.5-7.5h1v1h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h1v-1h1v-1h1v-1h1z M1.5-7.5h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h1v-1h1v-1h1v-1z M-2.5-3.5h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h-1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v1h-1v1z M1.5-3.5h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h1v-1h1v-1h1v-1z M-2.5 0.5h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h1v-1h1v-1h1v-1z M1.5 0.5h1v1h1v1h-1v1h-1v1h-1v-1h1v-1h1v-1h1v-1z M-2.5 4.5h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h1v-1h1v-1h1v-1z M1.5 4.5h1v1h1v1h-1v1h-1v-1h1v-1h1v-1z"/>
            <g fill="#0000FF"><path d="M-10.5-9.5h1v2h-1z M-9.5-11.5h1v2h-1z M-8.5-9.5h1v2h-1z"/><path d="M-12-14.5h5v2h-5z M-11-16.5h3v2h-3z"/><path d="M-6-16.5h1v5h-1z M-4-15.5h1v3h-1z"/><path d="M-1.5-11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M-1.5-14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></g>
            <g fill="#c1e3f7"><path d="M-10.5-11.5h1v2h-1z M-9.5-13.5h1v2h-1z M-8.5-11.5h1v2h-1z"/></g>
            <g fill="#FFD700"><path d="M4.5-14.5h2v5h-2z M7.5-14.5h2v5h-2z M10.5-14.5h2v5h-2z"/><path d="M3-10.5h8v2h-8z"/></g>
            <path fill="#FF0000" d="M1.5-7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </g>
    </svg>
);

export const UkrainianFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" {...props}>
        <path fill="#0057B7" d="M0 0h3v1H0z"/>
        <path fill="#FFD700" d="M0 1h3v1H0z"/>
    </svg>
);
