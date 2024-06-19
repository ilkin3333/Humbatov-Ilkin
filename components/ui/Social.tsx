import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path: 'https://github.com' },
  { icon: <FaLinkedinIn />, path: 'https://linkedin.com' },
  { icon: <FaYoutube />, path: 'https://youtube.com' },
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
