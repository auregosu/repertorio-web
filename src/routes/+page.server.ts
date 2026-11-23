import type { PageServerLoad } from './$types'
import { API_URL } from '$app/env/private';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch(API_URL)
	const payload = await res.json()
	return { api: payload.status }
}