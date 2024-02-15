import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event'; // userEvents are async
import { RouterLinkStub } from '@vue/test-utils';

import MainNav from '@/components/Navigation/MainNav.vue';

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
      },
    });
  };
  it('displays company name', () => {
    renderMainNav();
    // Displays the DOM in raw html
    // screen.debug();
    const companyName = screen.getByText('ThorWD Careers');
    expect(companyName).toBeInTheDocument();
  });

  it('displays menu items for navigation', () => {
    renderMainNav();
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

  describe('When the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav();
      // screen.debug();

      // screen.getByRole('img'); This method will fail because in the beginning it doesn't exist yet
      // screen.debug();
      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i, // in case of img, it will look for alt - i = case incensitive
        // VueTL recommends using Regex instead of strings
      }); // If the img doesn't exist, it will return null instead of raising an error

      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole('button', {
        name: /sign in/i,
      });
      await userEvent.click(loginButton);

      profileImage = screen.getByRole('img', {
        name: /user profile image/i,
      });

      expect(profileImage).toBeInTheDocument();
    });
  });
});
