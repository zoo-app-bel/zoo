import clsx from 'clsx'

import styles from './index.module.scss'

export interface LayoutProps {}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <article className={clsx(styles.container)}>
      <header className={clsx(styles.header)}>Header</header>
      <main className={clsx(styles.main)}>{children}</main>
    </article>
  )
}

export default Layout
