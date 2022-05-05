import { BlitzPage } from "blitz"
import Layout from "../core/layouts/Layout"
import Grid from "@mui/material/Grid"
import { useState } from "react"
import TextField from "@mui/material/TextField"
import { useUsersSearch } from "../core/hooks/useUsersSearch"
import Divider from "@mui/material/Divider"
import type { User } from "db"

function SearchResult({ user }: { user: User }) {
  return (
    <>
      <Grid item xs={12}>
        {user.name}
      </Grid>
      <Grid item xs={12}>
        <Divider flexItem />
      </Grid>
    </>
  )
}

const Search: BlitzPage = () => {
  const [query, setQuery] = useState("")
  const result = useUsersSearch(query)
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Search"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Grid>
      {result.map((user) => (
        <SearchResult key={user.id} user={user} />
      ))}
    </Grid>
  )
}

Search.getLayout = (page) => <Layout title="Search">{page}</Layout>

export default Search
