import { nextTick } from 'vue';
import { render, screen } from '@testing-library/vue';

import AppHeadline from '@/components/JobSearch/AppHeadline.vue';

describe('AppHeadline', () => {
  beforeEach(() => {
    vi.useFakeTimers(); // Mocks setTimeOut
  });

  afterEach(() => {
    vi.useRealTimers(); // Use the real time implementation - Remove the time mock to make sure the next test is not impacted by this test
    vi.unstubAllGlobals();
  });

  it('displays introductory action verb', () => {
    render(AppHeadline);

    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();
  });

  it('changes action verb at a consistent interval', () => {
    const mock = vi.fn();
    vi.stubGlobal('setInterval', mock); // Replace a global name with something else - replace setInterval with mock
    render(AppHeadline);

    expect(mock).toHaveBeenCalled();
  });

  it('swaps action verb after interval', async () => {
    render(AppHeadline);
    vi.advanceTimersToNextTimer(); // make AppHeadline re-renders, so anything we search in AppHeadline won't be found or won't have time to be updated with the new value

    await nextTick(); // nextTick is async, and wait for AppHealine to fully re-render
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();
  });

  it('removes interval when component disappears', () => {
    const clearInterval = vi.fn();
    vi.stubGlobal('clearInterval', clearInterval);

    const { unmount } = render(AppHeadline);
    unmount();

    expect(clearInterval).toHaveBeenCalled();
  });
});
