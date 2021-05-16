import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { name, address, salary } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<script>
				const el = document.createElement('script');
				const head = document.querySelector('head');
				el.setAttribute('type','application/ld+json');
				head.appendChild(el);
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
