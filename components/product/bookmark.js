import BookmarkEmptyIcon from '../../public/assets/icon-bookmark-empty.svg';
import BookmarkFullIcon from '../../public/assets/icon-bookmark-full.svg';

import styles from './bookmark.module.scss';

const Bookmark = ({ isBookmarked }) => {
	return <>{isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}</>;
};

export default Bookmark;
