import Link from 'next/link'
import style from '../styles/footer.module.css'

export default function Footer() {
	return (
		<>
			<footer className={style.footer}>
				<section className={style.section}>
					<h3>Page created by Oscar Moran&copy;</h3>
					<ul className={style.ul}>
						<Link
							href={'https://github.com/91oscar?tab=repositories'}
							target="_blank"
						>
							<il className={style.il}>Git</il>
						</Link>
					</ul>
				</section>
			</footer>
		</>
	)
}
