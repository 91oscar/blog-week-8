'use client'
import { useFormStatus } from 'react-dom'

export default function SavePostButton() {
	const formStatus = useFormStatus()

	return (
		<button type="submit" disabled={formStatus.pending}>
			{formStatus.pending ? 'Submitting post...' : 'Save post'}
		</button>
	)
}
