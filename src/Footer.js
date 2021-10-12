function Footer() {
  return (
    <footer style={{ padding: "10px" }} align="center">
      <div align="center" style={{ marginBottom: "10px" }}>
        Made with ❤️ by <b>Ankit Mishra</b>
      </div>
      <div align="center">
        <SocialLink
          imgUrl="https://raw.githubusercontent.com/ankitmishradev/awesome-icons/main/social/png/github.png"
          profileUrl="https://github.com/ankitmishradev"
          altText="linked-in"
        />
        <SocialLink
          imgUrl="https://raw.githubusercontent.com/ankitmishradev/awesome-icons/main/social/png/linked-in.png"
          profileUrl="https://www.linkedin.com/in/ankitmishradev/"
          altText="linked-in"
        />
        <SocialLink
          imgUrl="https://raw.githubusercontent.com/ankitmishradev/awesome-icons/main/social/png/codepen.png"
          profileUrl="https://codepen.io/ankitmishradev"
          altText="codepne"
        />
        <SocialLink
          imgUrl="https://raw.githubusercontent.com/ankitmishradev/awesome-icons/main/social/png/facebook.png"
          profileUrl="https://www.facebook.com/profile.php?id=100008455744534"
          altText="facebook"
        />
        <SocialLink
          imgUrl="https://raw.githubusercontent.com/ankitmishradev/awesome-icons/main/social/png/twitter.png"
          profileUrl="https://twitter.com/iankitmi"
          altText="twitter"
        />
        <SocialLink
          imgUrl="https://raw.githubusercontent.com/ankitmishradev/awesome-icons/main/social/png/instagram.png"
          profileUrl="https://www.instagram.com/iankitmi/"
          altText="instgram"
        />
      </div>
    </footer>
  );
}

const SocialLink = ({ imgUrl, profileUrl, altText }) => (
  <a href={profileUrl} target="blank" style={{ margin: "0 5px" }}>
    <img src={imgUrl} height="32px" width="32px" alt={altText} />
  </a>
);

export default Footer;
