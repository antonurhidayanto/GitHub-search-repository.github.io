import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
var UserSearch = function (_a) {
    var onSearch = _a.onSearch;
    var _b = useState(''), username = _b[0], setUsername = _b[1];
    var handleSubmit = function () {
        if (username.trim()) {
            onSearch(username);
        }
    };
    return (_jsxs("div", { style: { margin: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }, children: [_jsx(TextField, { label: "Enter GitHub Username", variant: 'outlined', value: username, onChange: function (e) { return setUsername(e.target.value); }, style: { marginBottom: '10px' } }), _jsx(Button, { variant: "outlined", color: "primary", onClick: handleSubmit, children: "Search" })] }));
};
export default UserSearch;
