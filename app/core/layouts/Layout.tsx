import { Head, BlitzLayout, useRouter } from "blitz"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import ForumIcon from "@mui/icons-material/Forum"
import SettingsIcon from "@mui/icons-material/Settings"
import Divider from "@mui/material/Divider"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title || "BlitzChat"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          height: "100vh",
          display: "grid",
          gridTemplateRows: "4rem 1fr 4rem",
          p: 4,
          maxWidth: (theme) => theme.breakpoints.values.sm,
          mx: "auto",
          gap: 2,
        }}
      >
        <Typography variant="h3" component="h1" textAlign="center">
          {" "}
          Blitz Chat{" "}
        </Typography>
        <Box
          sx={{
            border: (theme) => `1px solid ${theme.palette.primary.main}`,
            borderRadius: (theme) => +theme.shape.borderRadius,
            p: 2,
          }}
        >
          {children}
        </Box>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{
            borderRadius: (theme) => +theme.shape.borderRadius * 4,
            border: (theme) => `1px solid ${theme.palette.primary.main}`,
            alignItems: "center",
            justifyContent: "space-around",
            p: 2,
          }}
        >
          <IconButton onClick={() => router.push("/search")}>
            <PeopleAltIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Stack>
      </Box>
    </>
  )
}

export default Layout
