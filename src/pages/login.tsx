// import { Box, Container } from '@mui/material'
// import Grid from '@mui/material/Grid'
// import { BannerImage } from '@/components'

// function Login() {
//   return (
//     <>
//       <Box>
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
//           >
//             <Container maxWidth="sm">
//               <h1>Login</h1>
//             </Container>
//           </Grid>
//           <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
//             <BannerImage />
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   )
// }

// export default Login

import styled from 'styled-components'
import { Box, Container, Grid } from '@mui/material'

const BannerImage = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

export default function Login() {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
        >
          <Container maxWidth="sm">
            <h1>login</h1>
          </Container>
        </Grid>
        <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <BannerImage />
        </Grid>
      </Grid>
    </Box>
  )
}
