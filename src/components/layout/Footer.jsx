import React from 'react';

const footerMedia = {
  emailIcon: '/icons/email-main.webp',
  whatsappIcon: '/icons/whatsapp-main.webp',
  linkedinIcon: '/icons/linkedin-1.webp',
  instagramIcon: '/icons/instagram.webp',
  facebookIcon: '/icons/facebook.webp',
  pinterestIcon: '/icons/pinterest.webp',
  connectUnderline: '/icons/Isolation_Mode.svg',
};

const socialIcons = [
  { href: 'https://www.linkedin.com/company/growingen-solutions/', src: footerMedia.linkedinIcon, alt: 'LinkedIn' },
  { href: 'https://www.instagram.com/growin.gen?igsh=MWZiemU5cHZwa3VoYQ==', src: footerMedia.instagramIcon, alt: 'Instagram' },
  { href: 'https://www.facebook.com/profile.php?id=61576986820913', src: footerMedia.facebookIcon, alt: 'Facebook' },
  { href: 'https://in.pinterest.com/infogrowingen/', src: footerMedia.pinterestIcon, alt: 'Pinterest' },
];

const Footer = ({
  logoSrc = '/images/hero/logo.png',
  illustrationSrc = '/images/banners/footer-character.png',
}) => {
  return (
    <footer className="relative overflow-hidden bg-[#FFF1F0] font-sans text-[var(--color-text)]">
      {/* 
        `.site-container` handles standard responsive padding (px-4 -> px-24). 
        Flex direction handles Mobile (col) -> Desktop (row).
      */}
      <div className="site-container flex flex-col justify-between py-10 sm:py-12 lg:flex-row lg:py-16">
        
        {/* ======================= */}
        {/* LEFT SECTION (BRANDING) */}
        {/* ======================= */}
        <div className="flex w-full flex-col items-start self-start text-left lg:w-auto">
          {/* Responsive Logo */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <img
              src={logoSrc}
              alt="GrowinGen Solutions"
              className="h-12 w-auto object-contain sm:h-14 lg:h-[60px]"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/200x50?text=Logo+Placeholder';
              }}
            />
          </div>

          <div className="flex flex-row items-center gap-4 sm:gap-6 lg:gap-10">
            {/* Avatar smoothly scales up from mobile to desktop */}
            <div className="w-[120px] flex-shrink-0 sm:w-[150px] lg:w-[180px]">
              <img
                src={illustrationSrc}
                alt="3D Avatar Character"
                className="h-auto w-full origin-bottom scale-110 object-contain drop-shadow-2xl"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x300?text=Avatar';
                }}
              />
            </div>

            <div className="relative flex flex-col justify-center">
              {/* Inheriting `--fs-hero-title` naturally scales text from 32px (mobile) to 70px (large screens) */}
              <h2
                className="font-extrabold leading-[1.05] tracking-tight text-[#0f172a]"
                style={{ fontSize: 'var(--fs-hero-title)' }}
              >
                Let's
                <br />
                Connect
              </h2>

              {/* Decorative underline scales and positions responsively under "Connect" */}
              <div className="pointer-events-none absolute -bottom-3 left-[10%] h-[16px] w-[110px] overflow-visible sm:-bottom-5 sm:left-[15%] sm:h-[22px] sm:w-[140px] lg:-bottom-6 lg:left-[10%] lg:h-[26px] lg:w-[188px]">
                <img
                  src={footerMedia.connectUnderline}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ======================= */}
        {/* DIVIDER                   */}
        {/* ======================= */}
        {/* Horizontal on mobile/tablet, Vertical on Desktop */}
        <div className="my-10 block h-[1px] w-full bg-black/10 lg:hidden"></div>
        <div className="my-10 hidden w-[1.5px] bg-black/15 shadow-[0_0_0_1px_rgba(15,23,42,0.03)] lg:mx-10 xl:mx-14 lg:block"></div>

        {/* ======================= */}
        {/* RIGHT SECTION (LINKS)   */}
        {/* ======================= */}
        <div className="flex w-full flex-1 flex-col justify-center">
          
          {/* Contact Methods */}
          <div className="flex w-full flex-col gap-5 border-b border-black/10 pb-8 sm:gap-6 lg:pb-10">
            {/* Email */}
            <div className="group flex cursor-pointer items-center gap-4 sm:gap-5">
              <div className="h-10 w-10 flex-shrink-0 transition-transform group-hover:-translate-y-1 sm:h-12 sm:w-12 lg:h-[48px] lg:w-[48px]">
                <img
                  src={footerMedia.emailIcon}
                  alt="Email icon"
                  className="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              {/* Inherits `--fs-card-title` for responsive 24px -> 40px scaling. Uses break-all on mobile to stop screen blowout. */}
              <span
                className="break-all font-bold leading-none tracking-tight transition-colors group-hover:text-blue-600 sm:break-normal"
                style={{ fontSize: 'var(--fs-card-title)' }}
              >
                connect@growingen.com
              </span>
            </div>

            {/* Phone */}
            <div className="group flex cursor-pointer items-center gap-4 sm:gap-5">
              <div className="h-10 w-10 flex-shrink-0 transition-transform group-hover:-translate-y-1 sm:h-12 sm:w-12 lg:h-[48px] lg:w-[48px]">
                <img
                  src={footerMedia.whatsappIcon}
                  alt="WhatsApp icon"
                  className="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <span
                className="font-bold leading-none tracking-tight transition-colors group-hover:text-green-600"
                style={{ fontSize: 'var(--fs-card-title)' }}
              >
                +91 86 2591 2593
              </span>
            </div>
          </div>

          {/* Menus & Socials Container */}
          <div className="flex flex-col justify-between gap-10 pt-8 sm:flex-row sm:flex-wrap lg:flex-nowrap lg:gap-8 lg:pt-10">
            
            {/* Link Columns */}
            <div className="flex flex-1 flex-col gap-10 sm:flex-row sm:gap-12 md:gap-24 lg:gap-16">
              {/* Services List */}
              <div className="min-w-max">
                <h4
                  className="mb-4 pb-2 font-bold leading-none text-[#0f172a]"
                  style={{ fontSize: 'var(--fs-section-subtitle)' }}
                >
                  Services
                </h4>
                <ul className="flex flex-col gap-3">
                  {['Website Optimization', 'Business Growth', 'Social Media Management', 'SEO Development'].map((item) => (
                    <li key={item}>
                      <a href="#" className="footer-link relative inline-flex w-fit pr-5">
                        <span
                          className="footer-link__text font-medium leading-relaxed tracking-normal text-[#6B7280]"
                          style={{ fontSize: 'var(--fs-card-body)' }}
                        >
                          {item}
                        </span>
                        <span className="footer-link__line w-[118%]"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links List */}
              <div className="min-w-max">
                <h4
                  className="mb-4 pb-2 font-bold leading-none text-[#0f172a]"
                  style={{ fontSize: 'var(--fs-section-subtitle)' }}
                >
                  Quick Links
                </h4>
                <ul className="flex flex-col gap-3">
                  {['Terms & Conditions', 'Privacy Policy', 'Sitemap'].map((item) => (
                    <li key={item}>
                      <a href="#" className="footer-link relative inline-flex w-fit pr-5">
                        <span
                          className="footer-link__text font-medium leading-relaxed tracking-normal text-[#6B7280]"
                          style={{ fontSize: 'var(--fs-card-body)' }}
                        >
                          {item}
                        </span>
                        <span className="footer-link__line w-[118%]"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Media & QR Code */}
            {/* On mobile: row layout. On tablet/desktop: column layout aligned to the right. */}
            <div className="flex flex-row items-center justify-between border-t border-black/10 pt-8 sm:flex-col sm:items-end sm:border-none sm:pt-0 lg:items-center">
              
              {/* Icons */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                {socialIcons.map((icon) => (
                  <a
                    key={icon.alt}
                    href={icon.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit Growingen on ${icon.alt}`}
                    className="flex h-9 w-9 items-center justify-center transition-transform hover:-translate-y-1 sm:h-10 sm:w-10"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="h-full w-full object-contain drop-shadow-sm"
                    />
                  </a>
                ))}
              </div>

              {/* Custom QR Code Box */}
              <div className="relative mt-0 flex justify-center self-center sm:mt-6">
                <div className="group relative h-20 w-20 cursor-pointer p-1.5 sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px] xl:h-[100px] xl:w-[100px] 2xl:h-[120px] 2xl:w-[120px]">
                  <div className="absolute left-0 top-0 h-3 w-3 rounded-tl-[3px] border-l-2 border-t-2 border-gray-500 transition-all group-hover:border-[var(--color-nav-highlight)] sm:h-[14px] sm:w-[14px]"></div>
                  <div className="absolute right-0 top-0 h-3 w-3 rounded-tr-[3px] border-r-2 border-t-2 border-gray-500 transition-all group-hover:border-[var(--color-nav-highlight)] sm:h-[14px] sm:w-[14px]"></div>
                  <div className="absolute bottom-0 left-0 h-3 w-3 rounded-bl-[3px] border-b-2 border-l-2 border-gray-500 transition-all group-hover:border-[var(--color-nav-highlight)] sm:h-[14px] sm:w-[14px]"></div>
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-br-[3px] border-b-2 border-r-2 border-gray-500 transition-all group-hover:border-[var(--color-nav-highlight)] sm:h-[14px] sm:w-[14px]"></div>
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[2px] bg-white">
                    <img
                      src="/icons/qr.svg"
                      alt="QR Code"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
