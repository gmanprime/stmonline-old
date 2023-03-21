import styles from './page.module.scss'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  )
}
