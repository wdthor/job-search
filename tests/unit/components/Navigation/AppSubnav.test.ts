import { render, screen } from '@testing-library/vue';

import AppSubnav from '@/components/Navigation/AppSubnav.vue';

describe('AppSubnav', () => {
  describe('When user is on jobs page', () => {
    it('displays job count', () => {
      render(AppSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const jobCount = screen.getByText('1653');

      expect(jobCount).toBeInTheDocument();
    });
  });
  describe.skip('When user is not on jobs page', () => {
    it('does not display job count', () => {
      render(AppSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const jobCount = screen.queryByText('1653');

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
