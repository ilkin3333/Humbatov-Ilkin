import { Target } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path:  'https://github.com/ilkin3333' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/ilkin-humbatov-1634b1296/' },
  { icon: <FaInstagram />, path: 'https://instagram.com/ilkin_humbatov' },
  { icon: <FaTwitter />, path: 'https://twitter.com' },
];

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
