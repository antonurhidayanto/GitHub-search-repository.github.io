import React, { useState } from 'react';
import  { User } from './types/User';
import UserSearch from './components/UserSearch';
import UserCard from './components/UserCard';
import { fetchUsers } from './utils/api';
import { Accordion, AccordionDetails, AccordionSummary, FormControl, InputLabel, MenuItem, Select,SelectChangeEvent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSearch = (username: string) => {
    fetchUsers(username).then((data) => {
      setUsers(data);
      setSelectedUser(null);
    });
  };


  const handleAccordionChange = (user: User) => {
    if (selectedUser?.login === user.login) {
      setSelectedUser(null);
    } else {
      setSelectedUser(user);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <UserSearch onSearch={handleSearch} />
      {users.length > 0 && (
        <div>
          <h3>Showing users for "{users[0]?.login}"</h3>
         {users.map((user) => (
            <Accordion
              key={user.id}
              expanded={selectedUser?.login === user.login} 
              onChange={() => handleAccordionChange(user)}
              sx={{
                  backgroundColor:'#f4f4f4',
                  borderRadius:'8px',
                  boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",
                  transform:"transition: transform 0.3s ease;",
                  marginBottom:'20px',
                  fontWeight: 'bold', 
                  '&:hover': {
                    transform: "translateY(-5px)"
                  },
                }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <h4>{user.login}</h4>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{gap: '10px'}}>
                 {selectedUser && <UserCard user={selectedUser} />}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;