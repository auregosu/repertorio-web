import type { PageServerLoad } from './$types'
import { API_URL } from '$app/env/private';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch(`${API_URL}/work`)
    if (!res.ok) {
        return { error: `${res.status}: ${res.statusText}` }
    }
	return { works: await res.json() }
}