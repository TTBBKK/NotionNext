import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { checkContainHttp, sliceUrlFromHttp } from '@/lib/utils'

/**
 * 博客归档列表
 * @param posts 所有文章
 * @param archiveTitle 归档标题
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostArchive = ({ posts = [], archiveTitle }) => {
  if (!posts || posts.length === 0) {
    return <></>
  } else {
    return (
      <div>
        <div
          className="pt-8 pb-2 text-2xl  font-bold dark:text-gray-300"
          id={archiveTitle}
        >
          {archiveTitle}
        </div>
        <ul>
          {posts?.map(post => {
            const url = checkContainHttp(post.slug) ? sliceUrlFromHttp(post.slug) : `${siteConfig('SUB_PATH', '')}/${post.slug}`
            return <li
              key={post.id}
              className="border-l-3 border-gray-600 p-1 text-xs md:text-base items-center  hover:  hover: dark:hover:border-indigo-300 dark:border-indigo-400 transform duration-500"
            >
              <div id={post?.publishDay}>
                <span className="text-gray-600">{post.date?.start_date}</span>{' '}
                &nbsp;
                <Link
                  href={url}
                  passHref
                  className="dark:text-gray-400  dark:hover:text-indigo-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600">

                  {post.title}

                </Link>
              </div>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default BlogPostArchive
