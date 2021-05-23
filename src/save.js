import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { name, address, salary } = attributes;
	const jsonLd = {
		"@context" : "https://schema.org/",
		"@type" : "JobPosting",
		"title" : name,
		"description" : "<p>Google aspires to be an organization that reflects the globally diverse audience that our products and technology serve. We believe that in addition to hiring the best talent, a diversity of perspectives, ideas and cultures leads to the creation of better products and services.</p>",
		"identifier": {
			"@type": "PropertyValue",
			"name": "Google",
			"value": "1234567"
		},
		"datePosted" : "2017-01-18",
		"validThrough" : "2017-03-18T00:00",
		"employmentType" : "CONTRACTOR",
		"hiringOrganization" : {
			"@type" : "Organization",
			"name" : "Google",
			"sameAs" : "http://www.google.com",
			"logo" : "http://www.example.com/images/logo.png"
		},
		"jobLocation": {
		"@type": "Place",
			"address": {
			"@type": "PostalAddress",
			"streetAddress": "1600 Amphitheatre Pkwy",
			"addressLocality": "Mountain View",
			"addressRegion": "CA",
			"postalCode": "94043",
			"addressCountry": "US"
			}
		},
		"baseSalary": {
			"@type": "MonetaryAmount",
			"currency": "USD",
			"value": {
				"@type": "QuantitativeValue",
				"value": 40.00,
				"unitText": "HOUR"
			}
		}
	};
	return (
		<div { ...useBlockProps.save() }>
			<script type="application/ld+json">
				{ JSON.stringify(jsonLd, null, "\t") }
    	</script>
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
	);
}
