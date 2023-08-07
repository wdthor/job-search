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

  it('displays menu items for navigation', () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole('listitem');

    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent);
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at ThorWD',
      'How we hire',
      'Students',
      'Jobs',
    ]);
  });
});
