/**
 * Allow mouse navigatin by hovering on element edges
 */

 /**
  * External Dependencies
  */
import React from 'react';

/**
 * Internal Dependencies
 */
import { leftArrow, rightArrow,upArrow,downArrow } from './svgStrings';
import {MouseProps} from './mouseContext';

export default ( WrappedComponent ) => { 
    return class withMouseNavigation extends React.Component {
        constructor(props) {
            super( props );
            this.state = {
                horizontalHover: null,
                verticalHover: null,
                onClick: null,
            };
            
            this.onMouseLeave = this.onMouseLeave.bind( this );
            this.onMouseMove = this.onMouseMove.bind( this );
            // this.onClick = this.onClick.bind( this );
            
        }
    
        onMouseLeave() {
            console.log ('mouse just leaved', this.props);
            // return;
            this.setState( { horizontalHover: null } );
            document.body.style.cursor='';
        }  
        
        onMouseMove( event ) {

            console.log ('mouse just moved', this.props);
            // return;
            const container = event.currentTarget;
            const { width, height, left, right, top, bottom } = container.getBoundingClientRect();
            const { allowedNavigation,onClick } = this.props;

            let horizontalHover = null;
            if ( 
                allowedNavigation.left
                && ( event.clientX - left ) < width / 3 
            ) {
                horizontalHover = 'left';
            } else if ( 
                allowedNavigation.right
                && ( right - event.clientX ) < width / 3 
            ) {
                horizontalHover = 'right';
            }
    
            if ( horizontalHover !== this.state.horizontalHover ) {
                this.setState( { horizontalHover } );
                var cursorStyle = '';
                if (horizontalHover) {
                    let arrow = 'right' === horizontalHover
                        ?   rightArrow
                        :   leftArrow;
                    cursorStyle=`url('data:image/svg+xml;utf8,` + arrow + `') 24 24, auto`
                }
                document.body.style.cursor=cursorStyle;
            }
        }
        
        render() {
			return (
                <MouseProps.Consumer>
                    {
                        ({
                            horizontalHover,   
                            setHorizontalHover,
                            verticalHover,
                            setVerticalHover,
                            onHorizontalClick,
                            setOnHorizontalClick,
                            onVerticalClick,
                            setOnVerticalClick                            
                        }) => {

                            console.log ('setVerticalHover:');
                            return ( 
                                <div onMouseMove = { this.onMouseMove } onMouseLeave = { this.onMouseLeave } >

                                    <WrappedComponent 
                                        {...{
                                            ...this.props,
                                            ...this.state,
                                        }}
                                    />
                                </div>
                            )
                        }
                    }
                </MouseProps.Consumer>

			);
        }    
        
    }};
    // 'withMouseNavigation'
// );


