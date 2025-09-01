// Import all skills images
import css from './css.png';
import express from './express.png';
import firebase from './firebase.png';
import html from './html.png';
import js from './js.png';
import mongodb from './mongodb.png';
import mongoose from './mongoose.png';
import nextauth from './next_auth.png';
import nextjs from './nextjs.png';
import node from './node.png';
import react from './react.png';
import redux from './redux.png';
import shadcn from './shadcn.png';
import tailwindcss from './tailwind.png';
import ts from './ts.png';

export interface Skill {
    name: string;
    image: any;
    alt: string;
}

export const skills: Skill[] = [
    {
        name: 'HTML',
        image: html,
        alt: 'HTML5 logo'
    },
    {
        name: 'CSS',
        image: css,
        alt: 'CSS3 logo'
    },
    {
        name: 'JavaScript',
        image: js,
        alt: 'JavaScript logo'
    },
    {
        name: 'TypeScript',
        image: ts,
        alt: 'TypeScript logo'
    },
    {
        name: 'React',
        image: react,
        alt: 'React logo'
    },
    {
        name: 'Redux',
        image: redux,
        alt: 'Redux logo'
    },
    {
        name: 'Node.js',
        image: node,
        alt: 'Node.js logo'
    },
    {
        name: 'Express',
        image: express,
        alt: 'Express.js logo'
    },
    {
        name: 'MongoDB',
        image: mongodb,
        alt: 'MongoDB logo'
    },
    {
        name: 'Firebase',
        image: firebase,
        alt: 'Firebase logo'
    },
    {
        name: 'Tailwindcss',
        image: tailwindcss,
        alt: 'Tailwind CSS logo'
    },
    {
        name: 'Shadcn/ui',
        image: shadcn,
        alt: 'Shadcn/ui logo'
    },
    {
        name: 'Mongoose',
        image: mongoose,
        alt: 'Mongoose logo'
    },
    {
        name: 'Next.js',
        image: nextjs,
        alt: 'Next.js logo'
    },
    {
        name: 'NextAuth.js',
        image: nextauth,
        alt: 'NextAuth.js logo'
    }
];

export {
    css,
    express,
    firebase,
    html, js,
    mongodb, mongoose, nextauth, nextjs, node, react,
    redux,
    shadcn,
    tailwindcss,
    ts
};
export default skills;
