import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { fetchUserRepos } from '../utils/api';
import { Box, CircularProgress, List, ListItem, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
var UserCard = function (_a) {
    var user = _a.user;
    var _b = useState([]), repos = _b[0], setRepos = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    useEffect(function () {
        setLoading(true);
        fetchUserRepos(user.login)
            .then(function (repos) {
            setRepos(repos);
        })
            .catch(function (error) {
            console.error('Error fetching repositories:', error);
        })
            .finally(function () {
            setLoading(false);
        });
    }, [user.login]);
    return (_jsxs(Box, { sx: { padding: 5, backgroundColor: '#fff', borderRadius: '8px', boxShadow: 3, width: '100%', maxWidth: '500px', margin: '0 auto', '@media (max-width: 600px)': {
                padding: 1,
                maxWidth: '80%', // Full width on mobile
            }, }, children: [_jsxs(Typography, { variant: "h6", sx: { fontWeight: 'bold', marginBottom: 2, '@media (max-width: 600px)': {
                        fontSize: "16px", // Full width on mobile
                    }, }, children: [user.login, " GitHub repository"] }), loading ? (_jsx(CircularProgress, {})) : (_jsx(List, { children: repos.map(function (repo) { return (_jsx(ListItem, { sx: { padding: '10px 0', borderBottom: '1px solid #ddd', '&:hover': { backgroundColor: '#f4f4f4' } }, children: _jsxs(Box, { sx: { width: '100%' }, children: [_jsx(Typography, { variant: "body1", sx: { fontWeight: 'bold', '@media (max-width: 600px)': {
                                        fontSize: "14px", // Full width on mobile
                                    }, }, children: _jsx("a", { href: repo.html_url, target: '_blank', rel: 'noopener noreferrer', children: repo.name }) }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', '@media (max-width: 600px)': {
                                        justifyContent: 'flex-start', // Ensure left alignment on mobile
                                        marginTop: 1,
                                    }, }, children: [_jsx(StarIcon, { sx: { color: '#ffd700', marginRight: '5px' } }), _jsx(Typography, { variant: "body2", children: repo.stargazers_count })] }), _jsx(Typography, { variant: 'body2', sx: { color: 'gray', marginTop: 1 }, children: repo.description || 'No description available' })] }) }, repo.id)); }) }))] }));
};
export default UserCard;
