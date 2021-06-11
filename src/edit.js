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
	const { name, description, date, pref, city, address, company, companySite, companyLogo, salaryType, salaryMin, salaryMax, employmentType } = attributes;
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
	} else if(employmentType === "CONTRACTOR"){
		employmentTypeDisplay = "契約社員"
	} else if(employmentType === "TEMPORARY"){
		employmentTypeDisplay = "パートタイム（短期）"
	} else if(employmentType === "PER_DIEM"){
		employmentTypeDisplay = "アルバイト"
	} else if(employmentType === "OTHER"){
		employmentTypeDisplay = "その他"
	}


	return (
		<>
			<InspectorControls>
				<PanelBody title="概要">
					<TextControl
						label="職種"
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
					<TextControl
						label="番地"
						value={attributes.address}
						onChange={(text) => setAttributes({ address: text })}
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
						label="最少額（半角数字）"
						value={attributes.salaryMin}
						type="number"
						onChange={(text) => setAttributes({ salaryMin: text })}
					/>
					<TextControl
						label="最大額（半角数字）"
						value={attributes.salaryMax}
						type="number"
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
							{ value: "CONTRACTOR", label: '契約社員' },
							{ value: "TEMPORARY", label: 'パートタイム（短期）' },
							{ value: "PER_DIEM", label: 'アルバイト' },
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
						<th>職種</th>
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
						<td>{pref}{city}{address}</td>
					</tr>
					<tr>
						<th>待遇</th>
						<td>{salaryTypeDisplay} : {String(salaryMin).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}円 ~ {String(salaryMax).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}円</td>
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
