import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { name, description, date, pref, city, company, companySite, companyLogo, salaryType, salaryMin, salaryMax, employmentType } = attributes;
	const postDate = `${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}-${("0" + new Date().getDate()).slice(-2)}`;
	const displayDate = `${new Date(date).getFullYear()}年${new Date(date).getMonth() + 1}月${new Date(date).getDate()}日`;

	const jsonLd = {
		"@context" : "https://schema.org/",
		"@type" : "JobPosting",
		"title" : name,
		"description" : "<p>" + description + "</p>",
		"datePosted" : postDate,
		"validThrough" : date,
		"employmentType" : employmentType,
		"hiringOrganization" : {
			"@type" : "Organization",
			"name" : company,
			"sameAs" : companySite,
			"logo":companyLogo,
		},
		"jobLocation": {
		"@type": "Place",
			"address": {
			"@type": "PostalAddress",
			"addressLocality": pref,
			"addressRegion": city,
			"addressCountry": "JP"
			}
		},
		"baseSalary": {
			"@type": "MonetaryAmount",
			"currency": "JPY",
			"value": {
				"@type": "QuantitativeValue",
				"minValue": salaryMin,
				"maxValue": salaryMax,
				"unitText": salaryType
			}
		}
	};

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

	return (
		<div { ...useBlockProps.save() }>
			<script type="application/ld+json">
				{ JSON.stringify(jsonLd,null,"\t") }
    	</script>
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
	);
}
