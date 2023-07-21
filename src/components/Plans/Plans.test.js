import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reactRedux from 'react-redux';
import Plans from './Plans';

describe('The Plans component', () => {
  jest.spyOn(reactRedux, 'useDispatch');

  it('should show the base plans by default', () => {
    render(<Plans />);

    const basePlan1 = screen.getByText('BumbleBee (No Ads)');
    expect(basePlan1).toBeInTheDocument();

    const basePlan2 = screen.getByText('BumbleBee');
    expect(basePlan2).toBeInTheDocument();

    const basePlan3 = screen.getByText('BumbleBee + LiveTV');
    expect(basePlan3).toBeInTheDocument();

    const bundlePlan1 = screen.queryByText('BumbleBee (No Ads) + HBO');
    expect(bundlePlan1).not.toBeInTheDocument();

    const bundlePlan2 = screen.queryByText('BumbleBee + HBO');
    expect(bundlePlan2).not.toBeInTheDocument();

    const bundlePlan3 = screen.queryByText('BumbleBee + LiveTV + HBO');
    expect(bundlePlan3).not.toBeInTheDocument();
  });

  it('should switch between base and bundle plans on button click', async () => {
    render(<Plans />);

    const basePlan = screen.getByText('BumbleBee');
    expect(basePlan).toBeInTheDocument();

    const bundlePlan = screen.queryByText('BumbleBee + HBO');
    expect(bundlePlan).not.toBeInTheDocument();

    // click bundle plans button
    const bundleBtn = screen.getByText('BUNDLE & SAVE');
    userEvent.click(bundleBtn);

    const bundlePlan1 = screen.queryByText('BumbleBee + HBO');
    expect(bundlePlan1).toBeInTheDocument();

    const basePlan1 = screen.queryByText('BumbleBee');
    expect(basePlan1).not.toBeInTheDocument();

    // click base plans button
    const baseBtn = screen.getByText('BASE PLANS');
    userEvent.click(baseBtn);

    const basePlan2 = screen.getByText('BumbleBee');
    expect(basePlan2).toBeInTheDocument();

    const bundlePlan2 = screen.queryByText('BumbleBee + HBO');
    expect(bundlePlan2).not.toBeInTheDocument();
  });
});
