import React, { useState } from 'react';

const STTButton = () => {
	const [isShowSTTBtn, setIsShowSTTBtn] = useState(false);
	window.onscroll = () => {
		if (window.scrollY >= window.innerHeight / 4) {
			setIsShowSTTBtn(true);
		} else {
			setIsShowSTTBtn(false);
		}
	};

	return (
		<a
			href='#top'
			className={`stt-btn ${isShowSTTBtn ? 'showSTTBtn' : 'hideSTTBtn'}`}
		>
			<i className='fas fa-chevron-up'></i>
		</a>
	);
};

export default STTButton;
