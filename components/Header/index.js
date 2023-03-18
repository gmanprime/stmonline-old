import styles from "@/styles/Header.module.scss";

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

function index() {
  return (
    <div className={styles.Wrapper}>
      <ScrollIndicator />
    </div>
  );
}

export default index;
