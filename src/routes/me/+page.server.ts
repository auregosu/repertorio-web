import type { PageServerLoad } from './$types'
import { API_URL } from '$app/env/private';

export const load: PageServerLoad = async ({ fetch, cookies}) => {
	const token = cookies.get('token')
	if (!token) return { lists: null }

	const res = await fetch(`${API_URL}/user/lists`, {
		headers: { Authorization: `Bearer ${token}` },
	})
	return { lists: await res.json() }
}

import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions = {
	default: async ({ request, fetch, cookies }) => {
		const form = await request.formData()
        const token = cookies.get('token')

		const res = await fetch(`${API_URL}/user/lists`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
             },
			body: JSON.stringify({
				name: form.get('listName'),
			}),
		})

		if (!res.ok) {
			const { error } = await res.json()
			const issue = JSON.parse(error.message)[0]
			return fail(res.status, { error: `${issue.path[0]}: ${issue.message}` })
		}

		redirect(303, '/me')
	},
} satisfies Actions