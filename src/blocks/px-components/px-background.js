/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import {Component} from '@wordpress/element';

//===> Phenix Background <===//
export default class PhenixBackground extends Component {
    //===> Render <===//
    render () {
        //===> Properties <===//
        const {
            type,
            value,
            onChange
        } = this.props;

        //===> Colors List <===//
        const pxPallete = {
            main : [
                "bg-transparent",
                "bg-primary",
                "bg-secondary",
                "bg-gray",
                "bg-dark",
                "bg-white",
                "bg-success",
                "bg-danger",
                "bg-warning",
                "bg-info",
                "bg-alpha-05",
                "bg-alpha-10",
                "bg-alpha-25",
                "bg-alpha-50",
                "bg-alpha-75",
            ],
            offwhite : [
                "bg-offwhite-primary",
                "bg-offwhite-secondary",
                "bg-offwhite-info",
                "bg-offwhite-success",
                "bg-ffwhite-danger",
                "bg-offwhite-warning",
                "bg-offwhite-smoke",
                "bg-offwhite-smoke",
                "bg-offwhite-gray",
                "bg-offwhite-snow",
                "bg-offwhite-snow",
                "bg-offwhite-honeydew",
                "bg-offwhite-mintcream",
                "bg-offwhite-aliceblue",
                "bg-offwhite-ghost",
                "bg-offwhite-seashell",
                "bg-offwhite-beige",
                "bg-offwhite-oldlace",
                "bg-offwhite-floral",
                "bg-offwhite-ivory",
                "bg-offwhite-antique",
                "bg-offwhite-linen",
                "bg-offwhite-lavenderblush"
            ],
            brands : [
                "bg-facebook",
                "bg-twitter",
                "bg-youtube",
                "bg-instagram",
                "bg-snapchat",
                "bg-whatsapp",
                "bg-pinterest",
                "bg-linkedin",
                "bg-behance",
                "bg-dribbble",
                "bg-flicker"
            ],
        }

        //===> Returned Value <===//
        const backgroundOptions = {}

        //===> Type Activator <===//
        const activeBtn = (current) => type === current ?  'primary' : 'light';
        const activeTab = (current) => type === current ?  '' : 'hidden';

        //===> Set Background <===//
        const setBackground = clicked => {
            //===> Get Value <===//
            let button   = clicked.target,
                bgType   = button.getAttribute('data-type'),
                bgValue  = button.getAttribute('data-value');

            //===> Set Background Type <===//
            backgroundOptions.type  = bgType;

            //===> Set Gradient <===//
            if (type === 'gradient') {
                backgroundOptions.value = bgValue;
            } 
            //===> Set Color <===//
            else {
                backgroundOptions.value = bgValue;
            }

            //===> Return Options <===//
            return onChange(backgroundOptions);
        }

        //===> Buttons Creator <===//
        const makeButtons = (list, type) => {
            let output = [];
            //===> for each item <===//
            for (let index = 0; index < list.length; index++) {
                //===> Get Value <===//
                const name = list[index];

                //===> Convert to Title <===//
                let title = list[index].replace('bg-', '');
                    title = title.replace('-', ' ');
                    title = title.replace('grade', '');

                //===> UpperCase Title <===//
                title = title.replace(/^\w/, function(c) {
                    return c.toUpperCase();
                });

                output.push(<button onClick={setBackground} title={title} data-value={name} data-type={type} className={`${name} btn square tiny radius-circle border-1 border-solid border-alpha-25 mb-10 me-10 ${value === name ? 'px-active' : null}`}></button>);
            }

            //===> Return Buttons <===//
            return output;
        }

        //===> Options Changer <===//
        const changeType = (clicked) => {
            //===> Option Data <===//
            let element = Phenix(clicked.target),
                parent  = element.ancestor('.options-tabs'),
                optionsList = Phenix(parent).next('.options-list'),
                currentActive = Phenix(parent.querySelector('.primary')),
                currentType = `${element[0].getAttribute('data-value')}-options`,
                targetElement = optionsList.querySelector(`.${currentType}`);

            //===> Change Active <===//
            currentActive.addClass('light').removeClass('primary');
            element.addClass('primary').removeClass('light');

            //===> Show Options <===//
            optionsList.querySelector('.flexbox:not(.hidden)')?.classList.add('hidden');
            Phenix(targetElement).removeClass('hidden');
        };

        //===> Component Design <===//
        return (
            <div className='px-gb-component'>
                {/*===> Background Types <===*/}
                <div className='options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
                    <button className={`btn tiny col ${activeBtn('color')}`} onClick={changeType} data-value="color">Colors</button>
                    <button className={`btn tiny col ${activeBtn('gradient')}`} onClick={changeType} data-value="gradient">Gradients</button>
                    <button className={`btn tiny col ${activeBtn('image')}`} onClick={changeType} data-value="image">Image</button>
                    <button className={`btn tiny bg-offwhite-smoke col far fa-ellipsis-v`} style={{padding:'0 8px'}}></button>
                </div>

                {/*===> Background <===*/}
                <div className='options-list'>
                    {/*===> Colors <====*/}
                    <div className={`flexbox color-options ${activeTab('color')}`}>
                        {makeButtons(pxPallete.main, 'color')}
                        {/* Divider */}
                        <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                        {/* Offwhite */}
                        {makeButtons(pxPallete.offwhite, 'color')}
                        {/* Divider */}
                        <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                        {/* Brands */}
                        {makeButtons(pxPallete.brands, 'color')}
                    </div>
                    {/*===> Gradients <====*/}
                    <div className={`flexbox gradient-options ${activeTab('gradient')}`}>
                        {makeButtons([
                            "bg-grade-primary",
                            "bg-grade-secondary",
                            "bg-grade-warning",
                            "bg-grade-danger",
                            "bg-grade-success",
                            "bg-grade-water",
                            "bg-grade-ice",
                            "bg-grade-fire",
                            "bg-grade-purple"
                        ], 'gradient')}
                        {/* Divider */}
                        <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                        {/* Directions */}
                        <label className='mb-10 col-12'>Gradient Direction</label>
                        <div className='px-group radius-sm border-1 border-solid border-alpha-10 borderd-group mb-10'>
                            <button className='btn square tiny light' data-value="bg-grade-0"><i className='inline-block fas fa-arrow-to-bottom'></i></button>
                            <button className='btn square tiny light' data-value="bg-grade-45"><i className='inline-block fas fa-arrow-to-bottom'style={{transform:'rotate(45deg)'}}></i></button>
                            <button className='btn square tiny light' data-value="bg-grade-90"><i className='inline-block fas fa-arrow-to-bottom'style={{transform:'rotate(90deg)'}}></i></button>
                            <button className='btn square tiny light' data-value="bg-grade-90n"><i className='inline-block fas fa-arrow-to-bottom'style={{transform:'rotate(-90deg)'}}></i></button>
                            <button className='btn square tiny light' data-value="bg-grade-45n"><i className='inline-block fas fa-arrow-to-bottom'style={{transform:'rotate(-45deg)'}}></i></button>
                            <button className='btn square tiny light' data-value="bg-grade-180"><i className='inline-block fas fa-arrow-to-bottom'style={{transform:'rotate(180deg)'}}></i></button>
                        </div>
                    </div>
                    {/*===> Background <====*/}
                    <div className={`flexbox image-options ${activeTab('image')}`}>
                        ....
                    </div>
                </div>
                {/*===> End Component <===*/}
            </div>
        )
    }
}