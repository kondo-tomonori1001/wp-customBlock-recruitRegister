<?php
/**
 * Plugin Name:       Recruit Register
 * Description:       Googleしごと検索対応の構造化データを出力できる求人情報入力カスタムブロック
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            KON
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       recruit-register
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_recruit_register_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_recruit_register_block_init' );
