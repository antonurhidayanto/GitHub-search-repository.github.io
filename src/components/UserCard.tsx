import React, {useEffect,useState} from 'react'
import type {User, Repo} from '../types/User'
import { fetchUserRepos } from '../utils/api'
import { Box, CircularProgress, List, ListItem, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';


interface UserCardProps{
    user:User;
}

const UserCard: React.FC<UserCardProps> =({ user }) => {

const [repos, setRepos] = useState<Repo[]>([])
const [loading,setLoading] = useState<boolean>(false)

useEffect(() => {
    setLoading(true);
    fetchUserRepos(user.login)
      .then((repos) => {
        setRepos(repos);
      })
      .catch((error) => {
        console.error('Error fetching repositories:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user.login]);

  return (
    <Box sx={{ padding: 5, backgroundColor: '#fff', borderRadius: '8px', boxShadow: 3, width: '100%', maxWidth: '500px', margin: '0 auto', '@media (max-width: 600px)': {
          padding: 1,
          maxWidth: '80%', 
        }, }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 ,'@media (max-width: 600px)': {
         fontSize:"16px", 
        },}}>{user.login} GitHub repository</Typography>
        {loading ?(
                <CircularProgress/>
            ) : (
                <List>
                    {repos.map((repo) => (
                            <ListItem key={repo.id} sx={{ padding: '10px 0', borderBottom: '1px solid #ddd', '&:hover': { backgroundColor: '#f4f4f4' } }}>
                                 <Box sx={{ width: '100%' }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold','@media (max-width: 600px)': {
                                        fontSize:"14px", 
                                        }, }}>
                                        <a href ={repo.html_url} target='_blank' rel='noopener noreferrer'>
                                            {repo.name}
                                        </a>
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center','@media (max-width: 600px)': {
                                    justifyContent: 'flex-start',marginTop: 1}}}>
                                    <StarIcon sx={{ color: '#ffd700', marginRight: '5px' }} />
                                    <Typography variant="body2">{repo.stargazers_count}</Typography>
                                    </Box>
                                    <Typography variant='body2' sx={{ color: 'gray', marginTop: 1 }}>{repo.description || 'No description available'}</Typography>
                                 </Box>
                            </ListItem>
                        ))}
                </List>
            )}
    </Box>
  );
};

export default UserCard
