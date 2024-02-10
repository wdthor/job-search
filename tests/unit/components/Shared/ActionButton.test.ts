import { render, screen } from '@testing-library/vue';

import ActionButton from '@/components/Shared/ActionButton.vue';

describe('ActionButton', () => {
  it('renders text', () => {
    render(ActionButton, {
      props: {
        text: 'text',
        type: 'primary',
      },
    });

    const button = screen.getByRole('button', {
      name: /text/i,
    });

    expect(button).toBeInTheDocument();
  });

  it('applies one of several styles to button', () => {
    render(ActionButton, {
      props: {
        text: 'text',
        type: 'primary',
      },
    });

    const button = screen.getByRole('button', {
      name: /text/i,
    });

    expect(button).toHaveClass('primary');
  });
});
