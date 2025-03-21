import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage('public/pages/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage, 'DogInder | Frontpage');

const matches = readPage('./public/pages/matches/matches.html');
export const matchesPage = constructPage(matches, 
    {
       title: 'Documentation | ',
       cssLinks: '<link rel="stylesheet" href="/pages/matches/matches.css">'
    }
);

const contact = readPage('./public/pages/contact/contact.html');
export const contactPage = constructPage(contact,
    {
        title: 'DogInder | Contact'
    }
);
