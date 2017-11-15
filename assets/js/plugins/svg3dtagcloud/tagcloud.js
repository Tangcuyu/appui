/* 建立污染物标签云*/

var entries = [ 
                { label: '重金属:汞', url: 'http://codepen.io/', target: '_top' },
                { label: '有机物:苯并比', url: 'http://threejs.org/', target: '_top' },
                { label: '重金属:镉', url: 'http://jscompress.com/', target: '_top' },
                { label: '有机物:酚类', url: 'https://tinypng.com/', target: '_top' },
                { label: '有机磷类:对硫磷', url: 'http://caniuse.com/', target: '_top' },
                { label: '重金属:铅', url: 'https://goo.gl/', target: '_top' },
                { label: '重金属:铬', url: 'https://twitter.com/', target: '_top' },
                { label: '化学肥料', url: 'http://gulpjs.com/', target: '_top' },
                { label: '致病微生物', url: 'https://www.browsersync.io/', target: '_top' },
                { label: '石灰', url: 'https://github.com/', target: '_top' },
                { label: '水泥', url: 'https://www.shadertoy.com/', target: '_top' },
                { label: '涂料和油漆', url: 'http://jsperf.com/', target: '_top' },
                { label: '放射性物质', url: 'http://foundation.zurb.com/', target: '_top' },
                { label: '有机氯类', url: 'http://createjs.com/', target: '_top' },
                { label: '苯氧羧酸类', url: 'http://julian.com/research/velocity/', target: '_top' },
                { label: '氨基甲酸酯类', url: 'https://jquery.com/', target: '_top' },
            ];     

var settings = {
                entries: entries,
                width: 268,
                height: 268,
                radius: '65%',
                radiusMin: 75,
                bgDraw: false,
                bgColor: '#000',
                opacityOver: 1.00,
                opacityOut: 0.05,
                opacitySpeed: 6,
                fov: 800,
                speed: 0.3,
                fontFamily: 'Oswald, Arial, sans-serif',
                fontSize: '15',
                fontColor: '#000',
                fontWeight: 'normal',//bold
                fontStyle: 'normal',//italic 
                fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                fontToUpperCase: true,
                tooltipFontFamily: 'Oswald, Arial, sans-serif',
                tooltipFontSize: '11',
                tooltipFontColor: '#fff',
                tooltipFontWeight: 'normal',//bold
                tooltipFontStyle: 'normal',//italic 
                tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                tooltipFontToUpperCase: false,
                tooltipTextAnchor: 'left',
                tooltipDiffX: 0,
                tooltipDiffY: 10
            };

