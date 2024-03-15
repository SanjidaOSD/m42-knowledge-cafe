import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddToBookmark,handleMarkAsRead }) => {
    const {id, title,author, cover,author_img,posted_date, reading_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-4' src={cover} alt={`Cover picture of the title${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-3'>
                <img className='w-14 rounded-3xl' src={author_img} alt="" />
                    <div>
                        <h3 className="text-s-xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                   <span>{reading_time} min read</span>
                   <button onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-red-900'><FaBookmark></FaBookmark></button>
                </div>

            </div>


            <h2 className="text-3xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
             onClick={() => handleMarkAsRead(id, reading_time)} 
            className='text-2xl font-bold text-blue-950 underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}


export default Blog;