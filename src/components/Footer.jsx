import React from 'react';
import { Footer as FooterFlowBite } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <FooterFlowBite bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterFlowBite.Title title="Company" />
            <FooterFlowBite.LinkGroup col>
              <FooterFlowBite.Link href="#">
                About
              </FooterFlowBite.Link>
              <FooterFlowBite.Link href="#">
                Careers
              </FooterFlowBite.Link>
              <FooterFlowBite.Link href="#">
                Brand Center
              </FooterFlowBite.Link>
              <FooterFlowBite.Link href="#">
                Blog
              </FooterFlowBite.Link>
            </FooterFlowBite.LinkGroup>
          </div>
          <div>
            <FooterFlowBite.Title title="help center" />
            <FooterFlowBite.LinkGroup col>
              <FooterFlowBite.Link href="#">
                Discord Server
              </FooterFlowBite.Link>
              <FooterFlowBite.Link href="#">
                Twitter
              </FooterFlowBite.Link>
              <FooterFlowBite.Link href="#">
                Facebook
              </FooterFlowBite.Link>
              <FooterFlowBite.Link href="#">
                Contact Us
              </FooterFlowBite.Link>
            </FooterFlowBite.LinkGroup>
          </div>
          <div>
            <FooterFlowBite.Title title="legal" />
            <FooterFlowBite.LinkGroup col>
              <FooterFlowBite.Link href="#">
                Privacy Policy
              </FooterFlowBite.Link>
              <FooterFlowBite.Link href="#">
                Licensing
              </FooterFlowBite.Link>
              <FooterFlowBite.Link href="#">
                Terms & Conditions
              </FooterFlowBite.Link>
            </FooterFlowBite.LinkGroup>
          </div>
          <div>
            <FooterFlowBite.Title title="download" />
            <FooterFlowBite.LinkGroup col>
              <FooterFlowBite.Link href="#">
                iOS
              </FooterFlowBite.Link>
              <FooterFlowBite.Link href="#">
                Android
              </FooterFlowBite.Link>
              <FooterFlowBite.Link href="#">
                Windows
              </FooterFlowBite.Link>
              <FooterFlowBite.Link href="#">
                MacOS
              </FooterFlowBite.Link>
            </FooterFlowBite.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterFlowBite.Copyright
            by="Flowbite™"
            href="#"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterFlowBite.Icon
              href="#"
              icon={BsFacebook}
            />
            <FooterFlowBite.Icon
              href="#"
              icon={BsInstagram}
            />
            <FooterFlowBite.Icon
              href="#"
              icon={BsTwitter}
            />
            <FooterFlowBite.Icon
              href="#"
              icon={BsGithub}
            />
            <FooterFlowBite.Icon
              href="#"
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </FooterFlowBite>
  )
}

export default Footer;