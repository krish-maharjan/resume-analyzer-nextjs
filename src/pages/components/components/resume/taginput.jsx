import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export default function TagInput(){
const [selected, setSelected] = useState(["tag"]);
console.log(selected, typeof(selected))

return (
	<div>
	<h1>NextJs Tag Input - GeeksforGeeks</h1>
	<div>
	<h1>Add Tags</h1>
	<pre>{JSON.stringify(selected)}</pre>
	<TagsInput
		value={selected}
		onChange={setSelected}
		name="tags"
		placeHolder="tags"
	/>
	<em>Enter tags</em>
	</div>
	</div>
);
};
