import styles from "@/styles/Header.module.scss";
import NavBar from "@components/Header/nav"

// other imports
import HeaderBackground from "@public/HeaderBackgroundGradient.png"

let ScrollIndicator = () => {
  // This is a narrow strip at the bottom edge of the header element that has an
  // indicator to scroll down (icon indicator) that can be clicked to scroll
  // down to the next section of the page.

  let ScrollIcon = () => {
    // scroll indicator icon logic function
    // this is where all the remote import logic is applied for the icon.
    return <div className={styles.ScrollIcon}></div>;
  };

  return (
    <div className={styles.scrollIndicator}>
      <ScrollIcon />
    </div>
  );
};

function Header() {
  
  return (
    <div className={styles.Wrapper} style={
      {
        backgroundImage: `url(${HeaderBackground.src})`,
        backdropFilter: 'blur(16px)'
      }
    }>
      <NavBar />
      <ScrollIndicator />
    </div>
  );
}

export default Header;
