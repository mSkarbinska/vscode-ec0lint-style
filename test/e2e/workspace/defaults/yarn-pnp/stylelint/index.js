'use strict';

module.exports = {
	lint() {
		return {
			results: [
				{
					warnings: [
						{
							line: 1,
							column: 1,
							rule: 'fake',
							text: 'Fake result from yarn-pnp',
							severity: 'error',
						},
					],
					invalidOptionWarnings: [],
				},
			],
		};
	},
};
