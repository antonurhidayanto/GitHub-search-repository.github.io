import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import UserSearch from '../components/UserSearch';
describe('UserSearch Component', function () {
    test('renders input and button', function () {
        render(_jsx(UserSearch, { onSearch: function () { } }));
        expect(screen.getByLabelText(/Enter GitHub username/i)).toBeInTheDocument();
        expect(screen.getByText(/Search/i)).toBeInTheDocument();
    });
});
