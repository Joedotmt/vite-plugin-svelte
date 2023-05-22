import { getEl, getText, isBuild, page } from '~utils';

describe('inspector-vite', () => {
	it('should render page', async () => {
		expect(await getText('h1')).toBe('Hello Inspector!');
	});
	if (!isBuild) {
		it('should show inspector toggle during dev', async () => {
			await page.locator('#svelte-inspector-toggle').waitFor({ state: 'visible', timeout: 500 });
			expect(await getEl('#svelte-inspector-toggle')).not.toBe(null);
		});
	} else {
		it('should not show inspector toggle during preview', async () => {
			expect(await getEl('#svelte-inspector-toggle')).toBe(null);
		});
	}
});
