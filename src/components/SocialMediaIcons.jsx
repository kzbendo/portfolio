const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/kzbendo"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github-mark-white.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/kenneth-bendo-117867128"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://drive.google.com/file/d/1KDvlpQ-E_txIb13_KcZmAaXIHs3GDQpn/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        onH="Resume"
      >
        <img alt="resume-link" src="../assets/resume.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
