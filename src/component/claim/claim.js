import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';

import './claim.css';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Claim() {
  return (
    <Box sx={{px: {xs:2, md:3}, mt: {xs: 3, md:4}}}>
<Box className="claimHead" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
<Typography variant="h3" gutterBottom sx={{fontSize:{xs:18, md:20}, fontWeight:700}}>Recent Claim Activity</Typography>
<Button variant="outlined">Submit a Claim</Button>
</Box>
<Box className="claimList" sx={{p:{xs:1, md:2}, mt:{xs:1, md:2}, backgroundColor:'#ffffff', boxShadow:1, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Benefit</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Drug</Typography>
</Box>
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Amount Submitted</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300, color:'green'}}>$185.73</Typography>
</Box>

<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Claim Number</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>I48151811</Typography>
</Box> 
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Amount Paid</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300, color:'green'}}>$4.11 Processed</Typography>   
</Box>

    <Box>
   <Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Patient</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Dqyfg Iebjasdzydr</Typography>
</Box>    
    </Box>

    <Box>
   <Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Date Received</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Mar 27, 2023</Typography>
</Box>   
    </Box>

<Button variant="outlined" endIcon={<SendIcon />} sx={{color: 'green', borderColor: 'green', px:{sm:'7px'}, py:{sm:'4px'}, fontSize:'14px'}}>View Claim</Button>

</Box>
<Box className="claimList" sx={{p:{xs:1, md:2}, mt:{xs:1, md:2}, backgroundColor:'#ffffff', boxShadow:1, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Benefit</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Drug</Typography>
</Box>
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Amount Submitted</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300, color:'green'}}>$185.73</Typography>
</Box>

<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Claim Number</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>I48151811</Typography>
</Box> 
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Amount Paid</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300, color:'green'}}>$4.11 Processed</Typography>   
</Box>

    <Box>
   <Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Patient</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Dqyfg Iebjasdzydr</Typography>
</Box>    
    </Box>

    <Box>
   <Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Date Received</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Mar 27, 2023</Typography>
</Box>   
    </Box>

<Button variant="outlined" endIcon={<SendIcon />} sx={{color: 'green', borderColor: 'green', px:{sm:'7px'}, py:{sm:'4px'}, fontSize:'14px'}}>View Claim</Button>

</Box>
<Box className="claimList" sx={{p:{xs:1, md:2}, mt:{xs:1, md:2}, backgroundColor:'#ffffff', boxShadow:1, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Benefit</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Drug</Typography>
</Box>
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Amount Submitted</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300, color:'green'}}>$185.73</Typography>
</Box>

<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Claim Number</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>I48151811</Typography>
</Box> 
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Amount Paid</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300, color:'green'}}>$4.11 Processed</Typography>   
</Box>

    <Box>
   <Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Patient</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Dqyfg Iebjasdzydr</Typography>
</Box>    
    </Box>

    <Box>
   <Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Date Received</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Mar 27, 2023</Typography>
</Box>   
    </Box>

<Button variant="outlined" endIcon={<SendIcon />} sx={{color: 'green', borderColor: 'green', px:{sm:'7px'}, py:{sm:'4px'}, fontSize:'14px'}}>View Claim</Button>

</Box>
<Box className="claimList" sx={{p:{xs:1, md:2}, mt:{xs:1, md:2}, backgroundColor:'#ffffff', boxShadow:1, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Benefit</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Drug</Typography>
</Box>
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Amount Submitted</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300, color:'green'}}>$185.73</Typography>
</Box>

<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Claim Number</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>I48151811</Typography>
</Box> 
<Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Amount Paid</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300, color:'green'}}>$4.11 Processed</Typography>   
</Box>

    <Box>
   <Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Patient</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Dqyfg Iebjasdzydr</Typography>
</Box>    
    </Box>

    <Box>
   <Box>
<Typography variant="h5" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:500}}>Date Received</Typography>
<Typography variant="p" gutterBottom sx={{fontSize:{xs:14, sm:13, md:15}, fontWeight:300}}>Mar 27, 2023</Typography>
</Box>   
    </Box>

<Button variant="outlined" endIcon={<SendIcon />} sx={{color: 'green', borderColor: 'green', px:{sm:'7px'}, py:{sm:'4px'}, fontSize:'14px'}}>View Claim</Button>

</Box>

    </Box>
  );
}