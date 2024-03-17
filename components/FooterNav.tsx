import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';
import Image from 'next/image';

const FooterNav = () => {
  return (
    <Footer container className=''>
      <div className="w-full text-center max-container padding-container my-2">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Image
            src="/BorderlineLogo.png"
            alt="Borderline Logo"
            width={150}
            height={50}
          />
          <FooterLinkGroup className='flex gap-10'>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by=" Borderline " year={2024} />
      </div>
    </Footer>
  );
}

export default FooterNav