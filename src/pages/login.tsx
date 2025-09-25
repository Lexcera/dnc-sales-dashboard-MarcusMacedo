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
import { FormComponent, StyledH1, StyledP, Logo } from '@/components'
import { pxToRem } from '@/utils'

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
            <Box sx={{ marginBottom: pxToRem(24) }}>
              <Logo height={41} width={100}></Logo>
            </Box>
            <Box sx={{ marginBottom: pxToRem(24) }}>
              <StyledH1>Bem Vindo</StyledH1>
              <StyledP> Digite sua senha e email para logar </StyledP>
            </Box>
            <FormComponent
              inputs={[
                { type: 'email', placeholder: 'Email' },
                { type: 'password', placeholder: 'Senha' },
              ]}
              buttons={[
                {
                  className: 'primary',
                  type: 'submit',
                  children: 'Login',
                },
              ]}
              message={{
                msg: 'Sucesso!!',
                type: 'success',
              }}
            />
          </Container>
        </Grid>
        <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <BannerImage />
        </Grid>
      </Grid>
    </Box>
  )
}
