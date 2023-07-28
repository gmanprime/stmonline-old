/* 

This component is a width spanning component that holds the reader schedule for the week
It will have an animted frame and background representing the day of the catholic calendar
the table will transition in based on the calendar based animation

*/

import styles from "@styles/Readers.module.scss"

function index() {
  return (
    <div className={styles.WrapperMain} >
      <div className={styles.centeredSpan}></div>
    </div>
  )
}

