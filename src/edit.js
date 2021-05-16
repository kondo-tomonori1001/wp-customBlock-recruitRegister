import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl } from "@wordpress/components";
// import { useState } from '@wordpress/compose';
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";

import "./editor.scss";

export default function RecruitEdit({ attributes, setAttributes }) {
	// const [ value, setValue ] = useState( '' );
	const { name, address, salary } = attributes;
	const blockProps = useBlockProps();
	return (
		<>
			<InspectorControls>
				<PanelBody title="テストコンテンツ">
					<TextControl
						label="職種"
						value={attributes.name}
						onChange={(text) => setAttributes({ name: text })}
					/>
					<TextControl
						label="勤務地"
						value={attributes.address}
						onChange={(text) => setAttributes({ address: text })}
					/>
					<TextControl
						label="給与"
						value={attributes.salary}
						onChange={(text) => setAttributes({ salary: text })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<table>
					<tr>
						<th>職種</th>
						<td>{name}</td>
					</tr>
					<tr>
						<th>勤務地</th>
						<td>{address}</td>
					</tr>
					<tr>
						<th>給与</th>
						<td>{salary}</td>
					</tr>
				</table>
			</div>
		</>
	);
}
