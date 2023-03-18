import { useContext } from 'react';
import { RecordsContext } from '@/contexts/RecordsContext';

import { PlayRecordModal } from './PlayRecordModal';

import iconPlay from '@/assets/images/icons/play.svg';
import iconDownload from '@/assets/images/icons/download.svg';
import iconX from '@/assets/images/icons/close.svg';

interface RecordsListItemProps {
	id: number;
	name: string;
	file: any;
}

export function RecordsListItem({ id, name, file }: RecordsListItemProps) {
	const { isPlaying, deleteRecord, playTheRecord } = useContext(RecordsContext);

	function handleDeleteRecord() {
		deleteRecord(id);
	}

	function handlePlayTheRecord() {
		playTheRecord(file);
	}

	return (
		<div className="bg-bg dark:bg-bg-dark rounded-custom shadow-sm w-full mb-4 relative py-4 flex justify-between items-center pl-20 overflow-hidden lg:flex-nowrap flex-wrap">
			<div className="absolute left-0 top-0 bg-text dark:bg-gray-400 text-white font-serif text-lg font-bold px-5 h-full flex justify-center items-center">
				.{ String(id).padStart(2, '0') }
			</div>

			<p className="font-mono text-sm text-text dark:text-gray-50 lg:break-normal break-all">{ name }</p>

			<div className="mr-5 flex">
				<button 
					type="button"
					className="mr-3 transition-transform duration-300 transform hover:scale-125 dark:invert"
					onClick={ handlePlayTheRecord }
				>
					<img src={ iconPlay } alt="Play"/>
				</button>

				<a
					href={file}
					download={name}
					target="_blank"
					className="mr-3 transition-transform duration-300 transform hover:scale-125 dark:invert"
				>
					<img src={ iconDownload } width={18} alt="Save"/>
				</a>

				<button 
					type="button"
					className="transition-transform duration-300 transform hover:scale-125"
					onClick={handleDeleteRecord}
				>
					<img src={ iconX } alt="Delete"/>
				</button>
			</div>

			{ isPlaying && <PlayRecordModal /> }
		</div>
	);
}