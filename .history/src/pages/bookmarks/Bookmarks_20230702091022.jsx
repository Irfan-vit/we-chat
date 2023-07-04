import useGetBookMarks from '../../backend/queryHooks/bookMark/useGetBookmarks'
import Nav from '../../components/nav/Nav'
const Bookmarks = () => {
  const { getBookMarksQuery } = useGetBookMarks()
  console.log(getBookMarksQuery?.data, 'bms')
  return (
    <>
      <div>Bookmarks</div>
      <div className="feed">
        <Nav />
        <PostsErrorBoundary />
        <Users />
      </div>
    </>
  )
}
export default Bookmarks