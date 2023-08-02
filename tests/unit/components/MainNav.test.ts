import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav);
    // Displays the DOM in raw html
    // screen.debug();
    const companyName = screen.getByText('ThorWD Careers');
    expect(companyName).toBeInTheDocument();
  });
});
