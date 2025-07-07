import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import UserSearch from './components/UserSearch';
import UserCard from './components/UserCard';
import { fetchUsers } from './utils/api';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
var App = function () {
    var _a;
    var _b = useState([]), users = _b[0], setUsers = _b[1];
    var _c = useState(null), selectedUser = _c[0], setSelectedUser = _c[1];
    var handleSearch = function (username) {
        fetchUsers(username).then(function (data) {
            setUsers(data);
            setSelectedUser(null);
        });
    };
    // const handleSelectChange = (event: SelectChangeEvent<string>) => {
    //   const selectedUsername = event.target.value as string;
    //   const user = users.find((user) => user.login === selectedUsername);
    //   setSelectedUser(user || null); // Set selected user
    // };
    var handleAccordionChange = function (user) {
        // Toggle accordion: If the same user is clicked, collapse, otherwise expand
        if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.login) === user.login) {
            setSelectedUser(null);
        }
        else {
            setSelectedUser(user);
        }
    };
    return (_jsxs("div", { style: { padding: '20px' }, children: [_jsx(UserSearch, { onSearch: handleSearch }), users.length > 0 && (_jsxs("div", { children: [_jsxs("h3", { children: ["Showing users for \"", (_a = users[0]) === null || _a === void 0 ? void 0 : _a.login, "\""] }), users.map(function (user) { return (_jsxs(Accordion, { expanded: (selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.login) === user.login, onChange: function () { return handleAccordionChange(user); }, sx: {
                            backgroundColor: '#f4f4f4',
                            borderRadius: '8px',
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            transform: "transition: transform 0.3s ease;",
                            marginBottom: '20px',
                            fontWeight: 'bold', // Make text bold
                            '&:hover': {
                                transform: "translateY(-5px)"
                            },
                        }, children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), children: _jsx("h4", { children: user.login }) }), _jsx(AccordionDetails, { children: _jsx("div", { style: { gap: '10px' }, children: selectedUser && _jsx(UserCard, { user: selectedUser }) }) })] }, user.id)); })] }))] }));
};
export default App;
