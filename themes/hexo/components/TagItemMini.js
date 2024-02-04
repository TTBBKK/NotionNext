import Link from 'next/link'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={`cursor-pointer inline-block border hover:bg-null dark:hover:text-white  hover:text-gray-400 duration-200
        mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
         ${selected
        ? 'text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-300'
        : `text-gray-400 hover:text-gray-600 bg-gray-200 dark:border-gray-400 notion-${tag.color}_background `}` }>

      <div className='font-light'>{selected && <i className='mr-1 fa-tag'/>} {tag.name + (tag.count ? `(${tag.count})` : '')} </div>

    </Link>
  );
}

export default TagItemMini
