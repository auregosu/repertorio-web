import { fail, redirect } from '@sveltejs/kit'
import { API_URL } from '$app/env/private';
import type { Actions } from './$types'

export const actions = {
	default: async ({ request, fetch }) => {
		const form = await request.formData()

		const res = await fetch(`${API_URL}/auth/signup`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: form.get('username'),
				email: form.get('email'),
				password: form.get('password'),
			}),
		})

		if (!res.ok) {
			const { error } = await res.json()
			const issue = JSON.parse(error.message)[0]
			return fail(res.status, { error: `${issue.path[0]}: ${issue.message}` })
		}

		redirect(303, '/')
	},
} satisfies Actions