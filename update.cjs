const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

const replacements = [
    {
        search: "'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop'",
        replace: "'/assets/peacockillustration.png'"
    },
    {
        search: "'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop'",
        replace: "'/assets/founder.png'"
    },
    {
        search: "'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop'",
        replace: "'/assets/global_network.png'"
    },
    {
        search: 'src={bgImage || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"}',
        replace: 'src={bgImage || "/assets/cta_banner.png"}'
    },
    {
        search: 'src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop"',
        replace: 'src="/assets/global_network.png"'
    },
    {
        search: '"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"',
        replace: '"/assets/peacockillustration.png"'
    },
    {
        search: '"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop"',
        replace: '"/assets/global_network.png"'
    },
    {
        search: 'src="/assets/cta-bg.jpg"',
        replace: 'src="/assets/cta_banner.png"'
    }
];

replacements.forEach(({ search, replace }) => {
    content = content.replace(search, replace);
});

// For Navbar text
const navbarText = `<div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-bold tracking-wide uppercase leading-none text-slate-900">
                            RAJ NANDINI
                        </span>
                        <span className="text-[10px] md:text-xs tracking-[0.2em] font-semibold text-slate-500 uppercase mt-1">
                            Iron & Minerals
                        </span>
                    </div>`;

const navbarLogo = `<img src="/assets/logotext(Rajnandini).png" alt="Raj Nandini Iron & Minerals" className="h-10 md:h-12 object-contain ml-2" />`;

// For Footer text
const footerText = `<div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-bold tracking-wide uppercase leading-none text-white">
                                RAJ NANDINI
                            </span>
                            <span className="text-[10px] md:text-xs tracking-[0.2em] font-semibold text-stone-400 uppercase mt-1">
                                Iron & Minerals
                            </span>
                        </div>`;

const footerLogo = `<img src="/assets/logotext(Rajnandini).png" alt="Raj Nandini Iron & Minerals" className="h-10 md:h-12 object-contain ml-2 brightness-0 invert" />`;

content = content.replace(navbarText.replace(/\\n/g, '\\r\\n'), navbarLogo);
content = content.replace(navbarText, navbarLogo);
content = content.replace(footerText.replace(/\\n/g, '\\r\\n'), footerLogo);
content = content.replace(footerText, footerLogo);

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('App.jsx updated!');
