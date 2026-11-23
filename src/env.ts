import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    API_URL: {
        type: 'string',
        description: 'The base URL for the API',
        public: false
    }
});