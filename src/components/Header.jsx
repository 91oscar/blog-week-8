import Link from 'next/link'
import style from '../styles/header.module.css'

export default function Header() {
	return (
		<>
			<header>
				<nav className={style.header}>
					<h1 className={style.title}>Lacer</h1>
					<ul className={style.nav__ul}>
						<Link href={'/'}>
							<il className={style.nav__il}>Home</il>
						</Link>
						<Link href={'/form'}>
							<il className={style.nav__il}>Form</il>
						</Link>
						<Link href={'/search'}>
							<il className={style.nav__il}>Search</il>
						</Link>
					</ul>
				</nav>
			</header>
		</>
	)
}
