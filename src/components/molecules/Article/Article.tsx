import * as S from './Article.style';
import {
	deletedPostAtom,
	isDeleteModeAtom,
} from '../../../stores/articleModalOpen';
import {useAtom} from 'jotai';

export const Article = ({data}: {data: any}) => {
	const [isDeleteMode, setIsDeleteMode] = useAtom(isDeleteModeAtom);
	const [selectedData, setSelectedData] = useAtom(deletedPostAtom);
	const isSelected = selectedData.some(item => item.id === data.id);

	const handlePostClick = () => {
		if (isSelected) {
			setSelectedData(selectedData.filter(item => item.id !== data.id));
		} else {
			setSelectedData([...selectedData, data]);
		}
	};
	return (
		<S.PostWrapper
			onClick={() =>
				isDeleteMode
					? setSelectedData([...selectedData, data])
					: window.open(data.link, '_blank')
			}
		>
			<S.PostOGImageWrapper>
				<S.PostOGImage src={'#'} />
			</S.PostOGImageWrapper>
			<S.PostContentWrapper>
				<S.PostCheckboxWrapper isDeleteMode={isDeleteMode}>
					<S.PostCheckbox
						type='checkbox'
						checked={isSelected}
						onChange={handlePostClick}
					/>
				</S.PostCheckboxWrapper>
				<S.PostTitle>{data.id}</S.PostTitle>
			</S.PostContentWrapper>
		</S.PostWrapper>
	);
};