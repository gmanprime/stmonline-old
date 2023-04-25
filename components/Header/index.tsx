import styles from "@/styles/Header.module.scss";
import Link from "next/link"

interface navItems {
  Title: String,
  LinkTo: String,
}

let NavBar = () =>{
  //  Nav Component for the website header

  // The navItems should be imported based on route structure of the website
  let navList:navItems[] = [
    {
      Title:"Home",
      LinkTo: "/"
    },
    {
      Title:"About",
      LinkTo:"/About"
    }
  ];
  
  let navGenerator = () => {
    return navList.map((navItem,i) =>{
      return <Link href={navItem.LinkTo.toString()} className={styles.navLink} key={i}>
          <li className={styles.navListItem}>{navItem.Title}</li>
      </Link>
    });
  }

  return <nav className={styles.NavBar}>
    <ul className={styles.navList}>
     {
      // generate nav list based incrementally based on available routes
      navGenerator()
     }
    </ul>
  </nav>
}

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
      <NavBar />
      <ScrollIndicator />
    </div>
  );
}

export default index;
