import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import { BannerImage, FormComponent } from '@/components'

function Registration() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <h1>Cadastro</h1>
            </Container>
            <FormComponent
              inputs={[
                { type: 'email', placeholder: 'Email' },
                { type: 'password', placeholder: 'Senha' },
              ]}
              buttons={[
                { className: 'primary', type: 'submit', children: 'Login' },
              ]}
              message={{
                msg: 'Erro!!!',
                type: 'error',
              }}
            ></FormComponent>
          </Grid>
          <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration
