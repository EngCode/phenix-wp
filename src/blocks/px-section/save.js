//====> WP Modules <====//
import {
    PanelBody,
    SelectControl,
    ToggleControl
} from '@wordpress/components';

import {
    InspectorControls,
    useBlockProps
} from '@wordpress/block-editor';

//====> Edit Mode <====//
export default function Save({ attributes }) {
    //===> Get Block Properties <===//
    const blockProps = useBlockProps.save();

    //===> Render <===//
    return (
        <div { ...blockProps }>
            {attributes.container ? 
                <div className={attributes.size}>
                    <InnerBlocks.Content />
                </div>
            : null}
        </div>
    );
}