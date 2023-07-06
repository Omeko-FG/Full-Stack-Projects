import { Typography } from "@mui/material"
import PostCard from "../components/blog/PostCard"
// import Charts from "../components/Charts"
// import KpiCards from "../components/KpiCards"
// import useStockCall from "../hooks/useStockCall"

const Home = () => {
  // const { getStockData } = useStockCall()

  // useEffect(() => {
  //   getStockData("sales")
  //   getStockData("purchases")
  // }, [])

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Blogs
      </Typography>
      <PostCard />
      {/* <KpiCards />
      <Charts /> */}
    </div>
  )
}

export default Home