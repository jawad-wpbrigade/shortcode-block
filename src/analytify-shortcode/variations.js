/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Analytify svg icon.
import { analytify } from './assets/icons';

/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Choices for predefined shortcode variations.
 *
 * @type {WPBlockVariation[]}
 */
const variations = [
	{
		name: 'simple-shortcode',
		title: __( 'Analytify Simple Shortcode' ),
		description: __( "Create Simple Analytify Shortcode to show stats. It's enough most of the times" ),
		icon: (
			<SVG
             width="800px"
             height="800px" 
             viewBox="0 0 17 17" 
             version="1.1" 
             xmlns="http://www.w3.org/2000/svg" >
	            <Path d="M0.026 1h3v1h-2v13h2v1h-3v-15zM14.026 
                1v1h2v13h-2v1h3v-15h-3zM8.91 7.967c-1.115-0.433-1.607-0.804-1.607-1.56 0-0.552 0.42-1.211 
                1.523-1.211 0.731 0 1.271 0.239 1.535 0.384l0.288-0.852c-0.359-0.204-0.96-0.396-1.787-0.396-1.571 
                0-2.614 0.936-2.614 2.195 0 1.14 0.815 1.823 2.135 2.291 1.091 0.419 1.523 0.851 1.523 1.606 0 
                0.815-0.624 1.38-1.691 1.38-0.72 0-1.403-0.24-1.871-0.528l-0.264 0.876c0.432 0.287 1.283 0.516 2.062 
                0.516 1.907 0 2.831-1.079 2.831-2.327 0.001-1.188-0.696-1.847-2.063-2.374z" />
            </SVG>
		),
        attributes: {
            "shortcode": "[analytify-stats metrics=\"screenPageViews\" date_type=\"- 1 days\" analytics_for=\"current\"]",
            "selectedMetrics": [
                "screenPageViews"
            ],
            "selectedDate": "- 1 days",
            "analyticsFor": "current",
            "shortCodeType": "simple"
        },
		scope: [ 'block' ],
        isActive: ( blockAttributes, variationAttributes ) => blockAttributes.shortCodeType === variationAttributes.shortCodeType
	},
	{
		name: "advance-shortcode",
		title: "Analytify Advaned Shortcode",
		description: __( 'Get more granular control over shortcode generation use to create complex shortcodes.' ),
        attributes: {
            "shortcode": "[analytify-stats metrics=\"sessions\" date_type=\"- 1 days\" analytics_for=\"current\"]",
            "selectedMetrics": [
                "sessions"
            ],
            "selectedDimensions" : [],
            "sortOption": "",
            "selectedDate": "- 1 days",
            "analyticsFor": "current",
            "shortCodeType": "advanced",
            "post_id": "12"
        },
		icon: analytify,
		scope: [ 'block' ],
        isActive: ( blockAttributes, variationAttributes ) => blockAttributes.shortCodeType === variationAttributes.shortCodeType
	}
];

export default variations;