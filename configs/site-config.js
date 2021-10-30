import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: ``,
  author: {
    name: "Pedro Caetano",
    accounts: [
      {
        url: "https://github.com/pedroccaetano",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      // {
      //   url: "https://twitter.com/muhammad_ahmaad",
      //   label: "Twitter Account",
      //   type: "twitter",
      //   icon: <FaTwitter />
      // },
      // {
      //   url: "https://dev.to/m_ahmad",
      //   label: "Dev Account",
      //   type: "gray",
      //   icon: <FaDev />
      // },
      {
        url: "https://linkedin.com/in/pedroccaetano",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      // {
      //   url: "https://www.quora.com/profile/Muhammad-Ahmad-66",
      //   label: "Quora Account",
      //   type: "red",
      //   icon: <FaQuora />
      // },
      {
        url: "mailto:pedrohenriquedecaldascaetano@gmail.com",
        label: "Pedro caetano",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
