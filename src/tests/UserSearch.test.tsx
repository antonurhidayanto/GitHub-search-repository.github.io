import { render, screen } from '@testing-library/react';
import UserSearch from '../components/UserSearch';

describe('UserSearch Component', () => {
  test('renders input and button', () => {
    render(<UserSearch onSearch={() => {}} />);
    

    expect(screen.getByLabelText(/Enter GitHub username/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });
});
