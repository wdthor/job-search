import { render, screen } from '@testing-library/vue';

import AppHeadline from '@/components/AppHeadline.vue';
import { nextTick } from 'vue';

describe('AppHeadline', () => {
  it('displays introductory action verb', () => {
    vi.useFakeTimers; // Mocks setTimeOut
    render(AppHeadline);

    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers(); // Use the real time implementation - Remove the time mock to make sure the next test is not impacted by this test
  });

  it('changes action verb at a consistent interval', () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    vi.stubGlobal('setInterval', mock); // Replace a global name with something else - replace setInterval with mock
    render(AppHeadline);

    expect(mock).toHaveBeenCalled();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('swaps action verb after interval', async () => {
    vi.useFakeTimers();
    render(AppHeadline);
    vi.advanceTimersToNextTimer(); // make AppHeadline re-renders, so anything we search in AppHeadline won't be found or won't have time to be updated with the new value

    await nextTick(); // nextTick is async, and wait for AppHealine to fully re-render
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('removes interval when component disappears', () => {
    vi.useFakeTimers();
    const clearInterval = vi.fn();
    vi.stubGlobal('clearInterval', clearInterval);

    const { unmount } = render(AppHeadline);
    unmount();

    expect(clearInterval).toHaveBeenCalled();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });
});
