var carousel;
			
			FWDUtils.onReady(function(){
				carousel = new FWD3DCarousel({
				
					//required settings
					carouselHolderDivId:"myDiv",
					carouselDataListDivId:"playList1",
					displayType:"fluidwidth",
					autoScale:"yes",
					carouselWidth:940,
					carouselHeight:538,
					skinPath:"load/skin_modern_silver",
												
					//main settings
					backgroundColor:"#edebd2",
					backgroundImagePath:"",
					thumbnailsBackgroundImagePath:"",
					scrollbarBackgroundImagePath:"",
					backgroundRepeat:"repeat-x",
					showDisplay2DAlways:"no",
					carouselStartPosition:"center",
					numberOfThumbnailsToDisplayLeftAndRight:4,
					slideshowDelay:5000,
					autoplay:"yes",
					showPrevButton:"yes",
					showNextButton:"yes",
					showSlideshowButton:"yes",
					disableNextAndPrevButtonsOnMobile:"no",
					controlsMaxWidth:900,
					slideshowTimerColor:"#777777",
					showContextMenu:"no",
					addKeyboardSupport:"yes",
												
					//thumbnail settings
					thumbnailWidth:516,
					thumbnailHeight:330,
					thumbnailSpaceOffset3D:0,
					thumbnailSpaceOffset2D:-19,
					thumbnailBorderSize:1,
					thumbnailBackgroundColor:"#666666",
					thumbnailBorderColor1:"#fcfdfd",
					thumbnailBorderColor2:"#e4e4e4",
					maxNumberOfThumbnailsOnMobile:13,
					showThumbnailsHtmlContent:"no",
					enableHtmlContent:"no",
					textBackgroundColor:"#333333",
					textBackgroundOpacity:.7,
					showText:"yes",
					showTextBackgroundImage:"no",
					showThumbnailBoxShadow:"yes",
					thumbnailBoxShadowCss:"0px 2px 2px #555555",
												
					//scrollbar settings
					showScrollbar:"no",
					disableScrollbarOnMobile:"yes",
					enableMouseWheelScroll:"yes",
					scrollbarHandlerWidth:300,
					scrollbarTextColorNormal:"#777777",
					scrollbarTextColorSelected:"#000000",
												
					//combobox settings
					showComboBox:"yes",
					startAtCategory:1,
					selectLabel:"SELECT CATEGORIES",
					allCategoriesLabel:"All Categories",
					showAllCategories:"no",
					comboBoxPosition:"topright",
					selectorBackgroundNormalColor1:"#fcfdfd",
					selectorBackgroundNormalColor2:"#e4e4e4",
					selectorBackgroundSelectedColor1:"#a7a7a7",
					selectorBackgroundSelectedColor2:"#8e8e8e",
					selectorTextNormalColor:"#8b8b8b",
					selectorTextSelectedColor:"#FFFFFF",
					buttonBackgroundNormalColor1:"#e7e7e7",
					buttonBackgroundNormalColor2:"#e7e7e7",
					buttonBackgroundSelectedColor1:"#a7a7a7",
					buttonBackgroundSelectedColor2:"#8e8e8e",
					buttonTextNormalColor:"#000000",
					buttonTextSelectedColor:"#FFFFFF",
					comboBoxShadowColor:"#000000",
					comboBoxHorizontalMargins:12,
					comboBoxVerticalMargins:12,
					comboBoxCornerRadius:0,
												
					//lightbox settings
					buttonsAlignment:"in",
					itemBoxShadow:"none",
					descriptionWindowAnimationType:"opacity",
					descriptionWindowPosition:"bottom",
					slideShowAutoPlay:"no",
					addKeyboardSupport:"yes",
					showCloseButton:"yes",
					showShareButton:"yes",
					showZoomButton:"yes",
					showSlideShowButton:"yes",
					showSlideShowAnimation:"yes",
					showNextAndPrevButtons:"yes",
					showNextAndPrevButtonsOnMobile:"yes",
					showDescriptionButton:"yes",
					showDescriptionByDefault:"no",
					videoShowFullScreenButton:"yes",
					videoAutoPlay:"no",
					nextVideoOrAudioAutoPlay:"yes",
					videoLoop:"no",
					audioAutoPlay:"no",
					audioLoop:"no",
					backgroundOpacity:.9,
					descriptionWindowBackgroundOpacity:.95,
					buttonsHideDelay:3,
					slideShowDelay:4,
					defaultItemWidth:640,
					defaultItemHeight:480,
					itemOffsetHeight:50,
					spaceBetweenButtons:1,
					buttonsOffsetIn:2,
					buttonsOffsetOut:5,
					itemBorderSize:5,
					itemBorderRadius:0,
					itemBackgroundColor:"#333333",
					itemBorderColor1:"#fcfdfd",
					itemBorderColor2:"#e4e4e4",
					lightBoxBackgroundColor:"#000000",
					descriptionWindowBackgroundColor:"#FFFFFF",
					videoPosterBackgroundColor:"#0099FF",
					videoControllerBackgroundColor:"#FFFFFF",
					audioControllerBackgroundColor:"#FFFFFF",
					timeColor:"#000000"
				});
			})
