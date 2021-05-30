import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl, TextareaControl, DateTimePicker, SelectControl } from "@wordpress/components";
// import { useState } from '@wordpress/compose';
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";

import "./editor.scss";

export default function RecruitEdit({ attributes, setAttributes }) {
	// const [ value, setValue ] = useState( '' );
	const { name, description, date, pref, city, company, companySite, companyLogo, salaryType, salaryMin, salaryMax, employmentType } = attributes;
	const blockProps = useBlockProps();
	// console.log(description.replace(/\r?\n/g, '<br>'));
	const displayDate = `${new Date(date).getFullYear()}年${new Date(date).getMonth() + 1}月${new Date(date).getDate()}日`;

	let salaryTypeDisplay;
	if(salaryType === "HOUR"){
		salaryTypeDisplay = "時給"
	} else if(salaryType === "DAY") {
		salaryTypeDisplay = "日給"
	} else if(salaryType === "WEEK") {
		salaryTypeDisplay = "週給"
	} else if(salaryType === "MONTH") {
		salaryTypeDisplay = "月収"
	} else if(salaryType === "YEAR") {
		salaryTypeDisplay = "年収"
	}

	let employmentTypeDisplay;
	if(employmentType === "FULL_TIME"){
		employmentTypeDisplay = "フルタイム"
	} else if(employmentType === "PART_TIME") {
		employmentTypeDisplay = "パートタイム"
	} else if(employmentType === "OTHER"){
		employmentTypeDisplay = "その他"
	}

	console.log(displayDate);
	return (
		<>
			<InspectorControls>
				<PanelBody title="概要">
					<TextControl
						label="タイトル"
						value={attributes.name}
						onChange={(text) => setAttributes({ name: text })}
					/>
					<TextareaControl
						label="募集内容"
						value={attributes.description}
						onChange={(text) => setAttributes({ description: text })}
					/>
				</PanelBody>
				<PanelBody title="会社概要">
					<TextControl
						label="会社名"
						value={attributes.company}
						onChange={(text) => setAttributes({ company: text })}
					/>
					<TextControl
						label="会社公式サイトURL（任意）"
						value={attributes.companySite}
						onChange={(text) => setAttributes({ companySite: text })}
					/>
					<TextControl
						label="会社ロゴURL（任意）"
						value={attributes.companyLogo}
						onChange={(text) => setAttributes({ companyLogo: text })}
					/>
					<TextControl
						label="都道府県"
						value={attributes.pref}
						onChange={(text) => setAttributes({ pref: text })}
					/>
					<TextControl
						label="市町村"
						value={attributes.city}
						onChange={(text) => setAttributes({ city: text })}
					/>
				</PanelBody>
				<PanelBody title="待遇（給与）">
					<SelectControl 
						label="給与形態"
						value={attributes.salaryType}
						onChange={(text) => setAttributes({ salaryType: text })}
						options={[
							{ value: null, label: '給与形態を選択',},
							{ value: "HOUR", label: '時給'},
							{ value: "DAY", label: '日給' },
							{ value: "WEEK", label: '週給' },
							{ value: "MONTH", label: '月給' },
							{ value: "YEAR", label: '年収' },
						]}
					/>
					<TextControl
						label="最少額"
						value={attributes.salaryMin}
						onChange={(text) => setAttributes({ salaryMin: text })}
					/>
					<TextControl
						label="最大額"
						value={attributes.salaryMax}
						onChange={(text) => setAttributes({ salaryMax: text })}
					/>
				</PanelBody>
				<PanelBody title="雇用形態">
					<SelectControl 
						value={attributes.employmentType}
						onChange={(text) => setAttributes({ employmentType: text })}
						options={[
							{ value: null, label: '雇用形態を選択',},
							{ value: "FULL_TIME", label: 'フルタイム'},
							{ value: "PART_TIME", label: 'パートタイム' },
							{ value: "OTHER", label: 'その他' },
						]}
					/>
				</PanelBody>
				<PanelBody title="募集期限">
					<DateTimePicker
						currentDate={attributes.date}
            onChange={ ( text ) => setAttributes( { date: text } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<table>
					<tr>
						<th>タイトル</th>
						<td>{name}</td>
					</tr>
					<tr>
						<th>募集内容</th>
						<td>{`${description}`}</td>
					</tr>
					<tr>
						<th>募集期限</th>
						<td>{displayDate}</td>
					</tr>
					<tr>
						<th>会社名</th>
						<td>{company}</td>
					</tr>
					<tr>
						<th>会社所在地</th>
						<td>{pref}{city}</td>
					</tr>
					<tr>
						<th>待遇</th>
						<td>{salaryTypeDisplay} : {salaryMin} ~ {salaryMax}</td>
					</tr>
					<tr>
						<th>雇用形態</th>
						<td>{employmentTypeDisplay}</td>
					</tr>
				</table>
			</div>
		</>
	);
}
