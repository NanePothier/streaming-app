import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reactRedux from 'react-redux';
import Plan from './Plan';

const mockHistoryFn = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockHistoryFn }),
}));

const mockPlan = {
  id: 'p1',
  type: 'base',
  title: 'Mock Plan',
  info: 'Get First Month Free, Then',
  price: 5.99,
  description:
    'This plan lets you watch all of our shows and movies without ads!',
  promote: true,
};

const renderPlan = ({ id, type, title, info, price, description, promote }) => {
  render(
    <Plan
      id={id}
      type={type}
      title={title}
      info={info}
      price={price}
      description={description}
      promote={promote}
    />
  );
};

describe('The Plan component', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  it('should display the plan information', () => {
    renderPlan(mockPlan);

    const planTitle = screen.getByText('Mock Plan');
    expect(planTitle).toBeInTheDocument();

    const planPrice = screen.getByText('$5.99');
    expect(planPrice).toBeInTheDocument();

    const planInfo = screen.getByText('Get First Month Free, Then');
    expect(planInfo).toBeInTheDocument();

    const planDescription = screen.getByTestId('description');
    expect(planDescription).toBeInTheDocument();
  });

  it('should call the event handler when the SELECT button is clicked', () => {
    const dispatchFn = jest.fn();
    useDispatchMock.mockReturnValue(dispatchFn);
    renderPlan(mockPlan);

    const selectBtn = screen.getByText('SELECT');
    userEvent.click(selectBtn);

    expect(dispatchFn).toHaveBeenCalled();
    expect(mockHistoryFn).toHaveBeenCalled();
  });
});
