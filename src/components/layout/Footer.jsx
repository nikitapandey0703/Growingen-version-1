import React from 'react';

const footerMedia = {
  emailIcon: '/icons/email-main.png',
  whatsappIcon: '/icons/whatsapp-main.png',
  linkedinIcon: '/icons/linkedin-1.png',
  instagramIcon: '/icons/instagram.png',
  facebookIcon: '/icons/facebook.png',
  pinterestIcon: '/icons/pinterest.png',
  connectUnderline: '/icons/Isolation_Mode.svg',
};

const socialIcons = [
  { href: '#', src: footerMedia.linkedinIcon, alt: 'LinkedIn' },
  { href: '#', src: footerMedia.instagramIcon, alt: 'Instagram' },
  { href: '#', src: footerMedia.facebookIcon, alt: 'Facebook' },
  { href: '#', src: footerMedia.pinterestIcon, alt: 'Pinterest' },
];

const Footer = ({
  logoSrc = '/images/hero/logo.png',
  illustrationSrc = '/images/banners/footer-character.png',
  width = '100%',
  maxWidth = '100%',
  minHeight = '490px',
}) => {
  return (
    <footer
      className="relative flex justify-center overflow-hidden bg-[#FFF1F0] text-black font-['Visby',_sans-serif]"
      style={{ width, maxWidth, minHeight }}
    >
      <div className="site-container flex w-full flex-col items-center justify-between py-12 lg:flex-row">
        <div className="flex w-full flex-col justify-center self-start lg:w-auto lg:self-center">
          <div className="mb-8">
            <img
              src={logoSrc}
              alt="GrowinGen Solutions"
              className="h-[60px] w-auto object-contain"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/200x50?text=Logo+Placeholder';
              }}
            />
          </div>

          <div className="flex flex-row items-center gap-[40px]">
            <div className="flex w-[170px] flex-shrink-0 items-center justify-center lg:w-[180px]">
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
              <h2 className="text-[46px] font-[800] leading-[1.05] tracking-tight text-[#0f172a] lg:text-[56px]">
                Let's
                <br />
                Connect
              </h2>

              <div className="pointer-events-none absolute -bottom-[24px] left-[40px] h-[26px] w-[180px] overflow-visible lg:left-[22px] lg:w-[188px]">
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

        <div className="mx-[45px] hidden h-[320px] w-[1.5px] bg-black/25 shadow-[0_0_0_1px_rgba(15,23,42,0.03)] lg:mx-[55px] lg:block"></div>

        <div className="mt-12 flex w-full flex-1 flex-col justify-center lg:mt-0">
          <div className="flex w-full flex-col gap-[20px] border-b border-black/15 pb-8">
            <div className="group flex cursor-pointer items-center gap-[16px]">
              <div className="h-[42px] w-[42px] flex-shrink-0 transition-transform group-hover:-translate-y-1 lg:h-[48px] lg:w-[48px]">
                <img
                  src={footerMedia.emailIcon}
                  alt="Email icon"
                  className="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <span className="text-[24px] font-[700] leading-none tracking-tight transition-colors group-hover:text-blue-600 lg:text-[34px]">
                connect@growingen.com
              </span>
            </div>

            <div className="group flex cursor-pointer items-center gap-[16px]">
              <div className="h-[42px] w-[42px] flex-shrink-0 transition-transform group-hover:-translate-y-1 lg:h-[48px] lg:w-[48px]">
                <img
                  src={footerMedia.whatsappIcon}
                  alt="WhatsApp icon"
                  className="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <span className="text-[24px] font-[700] leading-none tracking-tight transition-colors group-hover:text-green-600 lg:text-[34px]">
                +91 86 2591 2593
              </span>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-start justify-between gap-y-8 pt-8 lg:flex-nowrap">
            <div className="flex min-w-0 flex-[0_1_470px] flex-wrap items-start gap-x-[52px] gap-y-6">
              <div className="min-w-[188px]">
                <h4 className="mb-[36px] pb-4 text-[17px] font-[700] leading-none text-[#0f172a]">Services</h4>
                <ul className="flex flex-col gap-[4px]">
                {['Website Optimization', 'Business Growth', 'Social Media Managment', 'SEO Development'].map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link relative inline-flex w-fit pr-5">
                      <span className="footer-link__text text-[14px] font-[500] leading-[1.35] tracking-normal text-[#6B7280]">
                        {item}
                      </span>
                      <span className="footer-link__line w-[118%]"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

              <div className="min-w-[172px]">
                <h4 className="mb-[36px] pb-4 text-[17px] font-[700] leading-none text-[#0f172a]">Quick Links</h4>
                <ul className="flex flex-col gap-[4px]">
                {['Terms & Conditions', 'Privacy Policy', 'Sitemap'].map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link relative inline-flex w-fit pr-5">
                      <span className="footer-link__text text-[14px] font-[500] leading-[1.35] tracking-normal text-[#6B7280]">
                        {item}
                      </span>
                      <span className="footer-link__line w-[118%]"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>

            <div className="ml-auto flex flex-col items-center gap-[18px] self-start lg:pt-[4px]">
              <div className="flex items-center justify-center gap-[12px]">
                {socialIcons.map((icon) => (
                  <a
                    key={icon.alt}
                    href={icon.href}
                    className="flex h-[32px] w-[32px] items-center justify-center transition-transform hover:-translate-y-1"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="h-full w-full object-contain drop-shadow-sm"
                    />
                  </a>
                ))}
              </div>

              <div className="relative mt-1 flex justify-center self-center">
                <div className="group relative h-[76px] w-[76px] cursor-pointer p-[6px]">
                  <div className="absolute top-0 left-0 h-[14px] w-[14px] rounded-tl-[3px] border-t-[2px] border-l-[2px] border-gray-500 transition-all group-hover:border-[#F45328]"></div>
                  <div className="absolute top-0 right-0 h-[14px] w-[14px] rounded-tr-[3px] border-t-[2px] border-r-[2px] border-gray-500 transition-all group-hover:border-[#F45328]"></div>
                  <div className="absolute bottom-0 left-0 h-[14px] w-[14px] rounded-bl-[3px] border-b-[2px] border-l-[2px] border-gray-500 transition-all group-hover:border-[#F45328]"></div>
                  <div className="absolute right-0 bottom-0 h-[14px] w-[14px] rounded-br-[3px] border-r-[2px] border-b-[2px] border-gray-500 transition-all group-hover:border-[#F45328]"></div>
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[2px] bg-white">
                    <img
                      src="/icons/qr.png"
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
