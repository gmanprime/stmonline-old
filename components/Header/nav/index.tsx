'use client' //changes the component into a client side rendered component.
import Link from "next/link"
import { usePathname } from "next/navigation";
import styles from "@/styles/Header.module.scss";


interface navItems {
  Title: String,
  LinkTo: String,
  isActive: boolean
}


let NavBar = () =>{
  //  Nav Component for the website header

  // router element from nextjs for finding current route path
  const currentPath = usePathname();

  // The navItems should be imported based on route structure of the website
  let navList:navItems[] = [
    {
      Title:"Home",
      LinkTo: "/",
      isActive: currentPath === "/",
    },
    {
      Title:"About",
      LinkTo:"/About",
      isActive: currentPath === "/About"
    },
    {
      Title:"Contact Us",
      LinkTo:"/Contact",
      isActive: currentPath === "/Contact"
    }
  ];

  let navGenerator = () => {
    return navList.map((navItem,i) =>{
      return (
        <Link 
          href={navItem.LinkTo.toString()} 
          className={`${navItem.isActive == true? styles.activeNav: ""} ${styles.navLink}`} 
          key={i}
        >
          <li className={styles.navListItem}>{navItem.Title}</li>
        </Link>
      )
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

export default NavBar