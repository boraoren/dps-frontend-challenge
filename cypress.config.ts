import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		specPattern: '**/*.cy.{js,ts,jsx,tsx}', // ✅ allows test files anywhere
		baseUrl: 'http://localhost:8080', // adjust if needed
	},

});
