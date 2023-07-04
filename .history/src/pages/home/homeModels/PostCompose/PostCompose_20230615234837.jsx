import './postCompose.css'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
const PostCompose = () => {
  const { addPostsMutation } = useMutatePostsData()
  return (
    <>
      <div className="post-compose">
        <textarea name="post" id=""></textarea>
        <div>
          <ul>
            <li>photo</li>
            <li>emoji</li>
          </ul>
          <button onClick={()=>{
            addPostsMutation.mutate({
              _id: 'abc123',
              
            })
          }}>tweet</button>
        </div>
      </div>
    </>
  )
}
export default PostCompose