import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import { API_URL } from '$app/env/private';

// Nobody should visit /login directly, it only exists to receive the form
export const load = () => redirect(303, '/')

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')

		const res = await fetch(`${API_URL}/auth/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ login: username, password }),
		})

		if (!res.ok) {
			return fail(res.status, {
				error: res.status === 401 ? 'Wrong username/email or password' : 'Could not log in',
			})
		}
		if (!res.ok) {
			return fail(res.status, {
				error: res.status === 401 ? 'Wrong username/email or password' : 'Could not log in',
			})
		}

		const { token, maxAge } = await res.json()
		cookies.set('token', token, { path: '/', maxAge: parseInt(maxAge) })

		redirect(303, '/')
	},
} satisfies Actions