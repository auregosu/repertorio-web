import type { LayoutServerLoad } from './$types'
import { API_URL } from '$app/env/private'

export const load: LayoutServerLoad = async ({ cookies, fetch }) => {
	const token = cookies.get('token')
	if (!token) return { user: undefined }

	const res = await fetch(`${API_URL}/user/me`, {
		headers: { Authorization: `Bearer ${token}` },
	})
	return { user: res.ok ? await res.json() : undefined }
}