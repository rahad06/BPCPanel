import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material'
import EssayEditor from "./EssayEditor";


function Home(props) {
    const [recentItems, setRecentItems] = useState([]);

    // useEffect(() => {
    //     // Fetch recent essays and research projects
    //     const fetchRecentItems = async () => {
    //         try {
    //             const response = await axios.get('/api/home/recent?userId=1'); // Replace userId with the actual user ID
    //             setRecentItems(response.data);
    //         } catch (error) {
    //             console.error('Error fetching recent items:', error);
    //         }
    //     };
    //
    //     fetchRecentItems();
    // }, []);

    return (
        <Container>
          
        </Container>
    );
};

export default Home;
