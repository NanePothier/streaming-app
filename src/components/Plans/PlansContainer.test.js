import { screen, render } from '@testing-library/react';
import PlansContainer from './PlansContainer';

jest.mock('../UI/Header', () => () => <div>Mock Header</div>);
jest.mock('./Plans', () => () => <div>Mock Plans</div>);

describe('The PlansContainer component', () => {
  it('should show the header, plans and correct text', () => {
    render(<PlansContainer />);

    const header = screen.getByText('Mock Header');
    expect(header).toBeInTheDocument();

    const title = screen.getByText('Choose Your Plan');
    expect(title).toBeInTheDocument();

    const info = screen.getByText('Switch plans or cancel anytime.');
    expect(info).toBeInTheDocument();

    const plans = screen.getByText('Mock Plans');
    expect(plans).toBeInTheDocument();
  });
});
