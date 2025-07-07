import { render, screen, waitFor } from '@testing-library/react';
import UserCard from '../components/UserCard';
import type { User } from '../types/User';
import * as api from '../utils/api'; 


jest.mock('../utils/api');

const mockUser: User = {
  login: 'exampleUser',
  id: 1,
  avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
};

describe('UserCard Component', () => {
  test('renders user data', () => {
    render(<UserCard user={mockUser} />);
    expect(screen.getByText(mockUser.login)).toBeInTheDocument();
  });

  test('fetches and displays repositories on mount', async () => {
    const mockRepos = [
      { id: 1, name: 'repo1', description: 'Test Repo 1', stargazers_count: 5, html_url: '#' },
      { id: 2, name: 'repo2', description: 'Test Repo 2', stargazers_count: 3, html_url: '#' },
    ];

    
    (api.fetchUserRepos as jest.Mock).mockResolvedValue(mockRepos);

    render(<UserCard user={mockUser} />);

    await waitFor(() => expect(screen.getByText('repo1')).toBeInTheDocument());
    expect(screen.getByText('repo2')).toBeInTheDocument();
  });
});
