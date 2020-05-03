import React, { useState } from 'react';
import { map, find, indexOf } from 'lodash';
import Stream from './stream';


const Streams = (props) => {
	const { data } = props;
	const [streams, setStreams] = useState(data);
	const [counter, setCounter] = useState(0);


	function reorder(data) {
		console.log('HELLO FROM THE FN', counter + 1)
		setCounter(12)
		const streamToUpdate = find(streams, (s) => s.name === data.driver);
		const i = indexOf(streams, streamToUpdate);

		const s = streams;
		const item = s.splice(i, 1)[0];
		s.unshift(item);
		setStreams(s);
	};
	
	console.log('HELLO', streams);
	return <div>
	{map(streams, s => <Stream stream={s} reorder={reorder}/>)}
		</div>
	
};

export default Streams;
