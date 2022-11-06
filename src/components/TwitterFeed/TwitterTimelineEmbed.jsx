import React from 'react';
import script from 'scriptjs';

const twitterWidgetJs = 'https://platform.twitter.com/widgets.js';
const methodName = 'createTimeline';

const TwitterTimelineEmbed = props => {
	const ref = React.useRef(null);
	const [loading, setLoading] = React.useState(false);

	const buildOptions = () => {
		let options = Object.assign({}, props.options);

		if (props !== null && props !== void 0 && props.autoHeight) {
			let _ref$current, _ref$current$parentNo;

			options.height =
				(_ref$current = ref.current) === null || _ref$current === void 0
					? void 0
					: (_ref$current$parentNo = _ref$current.parentNode) ===
							null || _ref$current$parentNo === void 0
					? void 0
					: _ref$current$parentNo.offsetHeight;
		}

		options = Object.assign({}, options, {
			theme: props === null || props === void 0 ? void 0 : props.theme,
			linkColor:
				props === null || props === void 0 ? void 0 : props.linkColor,
			borderColor:
				props === null || props === void 0 ? void 0 : props.borderColor,
			lang: props === null || props === void 0 ? void 0 : props.lang,
			tweetLimit:
				props === null || props === void 0 ? void 0 : props.tweetLimit,
			ariaPolite:
				props === null || props === void 0 ? void 0 : props.ariaPolite,
		});
		return options;
	};

	const buildChromeOptions = function buildChromeOptions(options) {
		options.chrome = '';

		if (props.noHeader) {
			options.chrome = options.chrome + ' noheader';
		}

		if (props.noFooter) {
			options.chrome = options.chrome + ' nofooter';
		}

		if (props.noBorders) {
			options.chrome = options.chrome + ' noborders';
		}

		if (props.noScrollbar) {
			options.chrome = options.chrome + ' noscrollbar';
		}

		if (props.transparent) {
			options.chrome = options.chrome + ' transparent';
		}

		return options;
	};

	React.useEffect(function () {
		let isComponentMounted = true;

		script(twitterWidgetJs, 'twitter-embed', function () {
			if (!window.twttr) {
				console.error('Failure to load window.twttr, aborting load');
				return;
			}

			if (isComponentMounted) {
				if (!window.twttr.widgets[methodName]) {
					console.error(
						'Method ' +
							methodName +
							' is not present anymore in twttr.widget api',
					);
					return;
				}

				let options = buildOptions();
				options = buildChromeOptions(options);
				window.twttr.widgets[methodName](
					{
						sourceType: props.sourceType,
						screenName: props.screenName,
						userId: props.userId,
						ownerScreenName: props.ownerScreenName,
						slug: props.slug,
						id: props.id || props.widgetId,
						url: props.url,
					},
					ref === null || ref === void 0 ? void 0 : ref.current,
					options,
				).then(function (element) {
					setLoading(false);

					if (props.onLoad) {
						props.onLoad(element);
					}
				});
			}
		});
		return function () {
			isComponentMounted = false;
		};
	}, []);

	return (
		<>
			{loading && <>{props.placeholder}</>}
			<div className='custom-scrollbar' ref={ref} />
		</>
	);
};

export default TwitterTimelineEmbed;
