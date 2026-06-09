const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

// Hero section image change
const heroLogoSearch = `                                <img \n                                    src="/assets/logo.png" \n                                    alt="Raj Nandini Peacock Logo" \n                                    className="w-56 md:w-72 lg:w-[22rem] h-auto mb-10 object-contain drop-shadow-sm"`;
const heroLogoReplace = `                                <img \n                                    src="/assets/peacockillustration.png" \n                                    alt="Raj Nandini Peacock Logo" \n                                    className="w-56 md:w-72 lg:w-[22rem] h-auto mb-10 object-contain drop-shadow-sm"`;
content = content.replace(heroLogoSearch, heroLogoReplace);
content = content.replace(heroLogoSearch.replace(/\n/g, '\r\n'), heroLogoReplace.replace(/\n/g, '\r\n'));

// Navbar replacement
const navbarSearch = `                    <img src="/assets/logo.png" alt="Raj Nandini Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />\n                    <div className="hidden items-center justify-center w-12 h-12 bg-[#B58D54] text-white rounded-full font-bold text-xl">RN</div>\n                    <div className="flex flex-col">\n                        <span className="text-xl md:text-2xl font-bold tracking-wide uppercase leading-none text-slate-900">\n                            RAJ NANDINI\n                        </span>\n                        <span className="text-[10px] md:text-xs tracking-[0.2em] font-semibold text-slate-500 uppercase mt-1">\n                            Iron & Minerals\n                        </span>\n                    </div>`;

const navbarReplace = `                    <img src="/assets/logotext(Rajnandini).png" alt="Raj Nandini Logo" className="w-auto h-16 md:h-20 lg:h-24 object-contain" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />\n                    <div className="hidden items-center justify-center w-16 h-16 bg-[#B58D54] text-white rounded-full font-bold text-2xl">RN</div>`;

content = content.replace(navbarSearch, navbarReplace);
content = content.replace(navbarSearch.replace(/\n/g, '\r\n'), navbarReplace.replace(/\n/g, '\r\n'));

// Footer replacement
const footerSearch = `                        <img src="/assets/logo.png" alt="Raj Nandini Logo" className="w-12 h-12 object-contain brightness-0 invert" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />\n                        <div className="hidden items-center justify-center w-12 h-12 bg-[#B58D54] text-white rounded-full font-bold text-xl">RN</div>\n                        <div className="flex flex-col">\n                            <span className="text-xl md:text-2xl font-bold tracking-wide uppercase leading-none text-white">\n                                RAJ NANDINI\n                            </span>\n                            <span className="text-[10px] md:text-xs tracking-[0.2em] font-semibold text-stone-400 uppercase mt-1">\n                                Iron & Minerals\n                            </span>\n                        </div>`;

const footerReplace = `                        <img src="/assets/logotext(Rajnandini).png" alt="Raj Nandini Logo" className="w-auto h-16 md:h-20 object-contain brightness-0 invert" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />\n                        <div className="hidden items-center justify-center w-16 h-16 bg-[#B58D54] text-white rounded-full font-bold text-2xl">RN</div>`;

content = content.replace(footerSearch, footerReplace);
content = content.replace(footerSearch.replace(/\n/g, '\r\n'), footerReplace.replace(/\n/g, '\r\n'));


fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('App.jsx Navbar and Hero updated!');
