/*
Document: base_pages_dashboard.js
Author: Rustheme
Description: Custom JS code used in Dashboard Page (index.html)
 */

var BasePagesDashboard = function() {
	// Chart.js Chart: http://www.chartjs.org/docs
	var initDashChartJS = function() {

		// Get Chart Containers
		var //$dashChartLinesCnt1 = jQuery( '.js-chartjs-lines1' )[0].getContext( '2d' ),
			// $dashChartLinesCnt2 = jQuery( '.js-chartjs-lines2' )[0].getContext( '2d' ),
			$dashChartBarsCnt = jQuery( '.js-chartjs-bars' )[0].getContext( '2d' ),
			$dashChartLinesCnt3 = jQuery( '.js-chartjs-lines3' )[0].getContext( '2d' ),
			$dashChartLinesCnt4 = jQuery( '.js-chartjs-lines4' )[0].getContext( '2d' ),
			$dashChartLinesCnt5 = jQuery( '.js-chartjs-lines5' )[0].getContext( '2d' ),
			$dashChartLinesCnt6 = jQuery( '.js-chartjs-lines6' )[0].getContext( '2d' ),
			$flotLive = jQuery( '.js-flot-live' );

		// Set global chart options
		var $globalOptions = {
			showScale: true,
			tooltipCornerRadius: 2,
			maintainAspectRatio: false,
			responsive: true,
			animation: true,
			datasetFill: false,
			pointDotStrokeWidth: 4,
		};

		// Lines/Bar/Radar Chart Data
		var $chartLinesBarsRadarData = {
			labels: ['和平区', '南开区', '河西区', '河东区', '河北区', '红桥区', '北辰区', '东丽区', '西青区', '津南区', '武清区', '宝坻区', '滨海新区', '静海县', '宁河县', '蓟县'],
			datasets: [{
				label: '疑似污染地块面积',
				fillColor: App.hexToRgba( App.colors.blue, 20 ),
				strokeColor: App.hexToRgba( App.colors.blue, 40 ),
				pointColor: App.hexToRgba( App.colors.blue, 40 ),
				pointStrokeColor: '#fff',
				data: [30, 32, 40, 45, 43, 38, 55, 30, 32, 40, 45, 43, 38, 55, 43, 20]
			}, {
				label: '污染地块面积',
				fillColor: App.hexToRgba( App.colors.blue, 70 ),
				strokeColor: App.colors.blue,
				pointColor: App.colors.blue,
				pointStrokeColor: '#fff',
				data: [15, 16, 20, 25, 23, 25, 32, 30, 32, 40, 6, 43, 38, 55, 11, 33]
			},{
				label: '已修复地块面积',
				fillColor: App.hexToRgba( App.colors.blue, 70 ),
				strokeColor: App.colors.green,
				pointColor: App.colors.green,
				pointStrokeColor: '#fff',
				data: [10, 13, 20, 12, 23, 40, 12, 9, 30, 34, 34, 20, 31, 22, 8, 20]
			}]
		};

		// Lines Chart Data 1
		var $dashChartLinesData = {
			labels: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
			datasets: [
				{
					label: 'This Week',
					fillColor: 'rgba(255, 255, 255, .1)',
					strokeColor: 'rgba(255, 255, 255, .38)',
					pointColor: App.colors.blue,
					pointStrokeColor: '#fff',
					data: [20, 40, 24, 75, 16, 42, 20, 42, 40, 65, 48, 56, 80, 95]
				}
			]
		};

		// Lines Chart Data 2
		var $dashChartLinesData2 = {
			labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			datasets: [
				{
					label: 'This Week',
					fillColor: App.hexToRgba( App.colors.blue, 20 ),
					strokeColor: App.hexToRgba( App.colors.blue, 20 ),
					pointColor: '#fff',
					pointStrokeColor: App.hexToRgba( App.colors.blue, 70 ),
					data: [20, 25, 40, 30, 55, 60, 80]
				}
			]
		};

		// Lines Chart Data 3
		var $dashChartLinesData3 = {
			labels: ['地块基本信息填报','初步调查报告', '详细调查报告', '风险评估报告', '风险管控报告', '治理与修复报告', '治理效果评估报告'],
			datasets: [
				{
					label: '天',
					fillColor: App.hexToRgba( App.colors.purple, 10 ),
					pointColor: App.colors.purple,
					data: [7,14,20,45,20,15,5]
				},
				{
					label: 'This Week',
					fillColor: App.hexToRgba( App.colors.orange, 20 ),
					pointColor: App.colors.orange,
					data: [28, 39, 48, 59, 38, 30, 20]
				},
				{
					label: 'This Week',
					fillColor: App.hexToRgba( App.colors.blue, 30 ),
					pointColor: App.colors.blue,
					data: [47, 65, 76, 67, 54, 45, 25]
				},
				{
					label: 'This Week',
					fillColor: App.hexToRgba( App.colors.red, 40 ),
					pointColor: App.colors.red,
					
					data: [65, 87, 90, 120, 67, 56, 45]
				},
				{
					label: 'This Week',
					fillColor: App.hexToRgba( App.colors.red, 40 ),
					pointColor: App.colors.red,
					
					data: [78, 89, 94, 100, 55, 43, 56]
				},
				{
					label: 'This Week',
					fillColor: App.hexToRgba( App.colors.red, 40 ),
					pointColor: App.colors.red,
					
					data: [87, 87, 90, 120, 67, 56, 45]
				},
				{
					label: 'This Week',
					fillColor: App.hexToRgba( App.colors.red, 40 ),
					pointColor: App.colors.red,
					
					data: [90, 87, 90, 130, 78, 87, 89]
				},
				{
					label: 'This Week',
					fillColor: App.hexToRgba( App.colors.red, 40 ),
					pointColor: App.colors.red,
					
					data: [120, 87, 90, 165, 90, 78, 45]
				},
				{
					label: 'This Week',
					fillColor: App.hexToRgba( App.colors.green, 50 ),
					pointColor: App.colors.green,
					data: [90, 110, 132, 89, 78, 68, 89]
				}
			]
		};

		// Lines Chart Data 4
		var $dashChartLinesData4 = {
			labels: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
			datasets: [
				{
					label: 'This Week',
					strokeColor: App.colors.blue,
					pointColor: '#fff',
					pointStrokeColor: App.colors.blue,
					data: [20, 25, 40, 30, 45, 40, 55, 40, 48, 40, 42, 50]
				}
			]
		};

		// Lines Chart Data 5
		var $dashChartLinesData5 = {
			labels: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
			datasets: [
				{
					label: 'This Week',
					fillColor: App.hexToRgba( App.colors.green, 30 ),
					strokeColor: App.colors.green,
					pointColor: '#fff',
					pointStrokeColor: App.colors.green,
					data: [20, 25, 40, 30, 45, 40, 55, 40, 48, 40, 42, 50]
				}
			]
		};

		// Lines Chart Data 6
		var $dashChartLinesData6 = {
			labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
			datasets: [
				{
					label: 'This Week',
					fillColor: App.hexToRgba( App.colors.purple, 30 ),
					strokeColor: App.colors.purple,
					pointColor: '#fff',
					pointStrokeColor: App.colors.purple,
					data: [55, 40, 48, 40, 42, 50, 20, 25, 40, 30, 45, 40]
				}
			]
		};

		// Lines Chart Data 7
		var $dashChartLinesData7 = {
			labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
			datasets: [
				{
					fillColor: App.hexToRgba( App.colors.green, 30 ),
					strokeColor: App.colors.green,
					pointColor: '#fff',
					pointDot: false,
					pointStrokeColor: App.colors.green,
					data: [50, 45, 52, 35, 45, 64, 50, 47, 45, 53]
				}
			]
		};

		// Lines Chart Data 8
		var $dashChartLinesData8 = {
			labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
			datasets: [
				{
					fillColor: App.hexToRgba( App.colors.blue, 30 ),
					strokeColor: App.colors.blue,
					pointColor: '#fff',
					pointDot: false,
					pointStrokeColor: App.colors.blue,
					data: [30, 35, 42, 35, 60, 38, 50, 40, 48, 48]
				}
			]
		};

		// Lines Chart Data 9
		var $dashChartLinesData9 = {
			labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
			datasets: [
				{
					fillColor: App.hexToRgba( App.colors.purple, 30 ),
					strokeColor: App.colors.purple,
					pointColor: '#fff',
					pointDot: false,
					pointStrokeColor: App.colors.purple,
					data: [60, 55, 52, 38, 62, 40, 50, 46, 50, 54]
				}
			]
		};

		// Init Lines Chart
		// $dashChartLines = new Chart( $dashChartLinesCnt1 ).Line( $dashChartLinesData, $globalOptions );

		// Init Lines Chart 2
		// $dashChartLines2 = new Chart( $dashChartLinesCnt2 ).Line( $dashChartLinesData2, $globalOptions );

		// Init Lines Chart Bars
		$dashChartBars = new Chart( $dashChartBarsCnt ).Bar( $chartLinesBarsRadarData, {
			scaleBeginAtZero: false,
			scaleShowVerticalLines: true,
			barShowStroke: false,
			scaleFontFamily: "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
			scaleFontColor: App.colors.text_muted,
			tooltipTitleFontFamily: "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
			tooltipCornerRadius: 2,
			maintainAspectRatio: false,
			responsive: true,
			animation: true,
		});

		// Init Lines Chart 4
		$dashChartLines3 = new Chart( $dashChartLinesCnt3 ).Line( $dashChartLinesData3, {
			scaleShowHorizontalLines: false,
			bezierCurve: false,
			datasetFill: false,
			pointDotStrokeWidth: 2,
			scaleFontFamily: "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
			scaleFontColor: App.colors.text_muted,
			scaleFontStyle: '500',
			tooltipTitleFontFamily: "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
			tooltipCornerRadius: 2,
			maintainAspectRatio: false,
			responsive: true,
			animation: true,
		});

		// "Company overview" widget
		// Init Lines Chart 4
		$dashChartLines4 = new Chart( $dashChartLinesCnt4 ).Bar( $dashChartLinesData7, {
			pointDot: false,
			showScale: false,
			maintainAspectRatio: false,
			responsive: true,
			animation: false,
		});

		// Init Lines Chart 5
		$dashChartLines5 = new Chart( $dashChartLinesCnt5 ).Line( $dashChartLinesData8, {
			pointDot: false,
			showScale: false,
			maintainAspectRatio: false,
			responsive: true,
			animation: false,
		});

		// Init Lines Chart 6
		$dashChartLines6 = new Chart( $dashChartLinesCnt6 ).Line( $dashChartLinesData9, {
			pointDot: false,
			showScale: false,
			maintainAspectRatio: false,
			responsive: true,
			animation: false,
		});

		// Live Chart
		var $dataLive = [];

		// Generate random data
		function getRandomData() {

			if ( $dataLive.length > 0 )
				$dataLive = $dataLive.slice( 1 );

			while ( $dataLive.length < 300 ) {
				var prev = $dataLive.length > 0 ? $dataLive[$dataLive.length - 1] : 50;
				var y = prev + Math.random() * 10 - 5;
				if ( y < 0 )
					y = 0;
				if ( y > 100 )
					y = 100;
				$dataLive.push( y );
			}

			var res = [];
			for ( var i = 0; i < $dataLive.length; ++i )
				res.push([i, $dataLive[i]]);

			// Show live chart info
			jQuery( '.js-flot-live-info' ).html( y.toFixed( 0 ) + 'mg/kg' );

			return res;
		}

		// Update live chart
		function updateChartLive() {
			$chartLive.setData( [getRandomData()] );
			$chartLive.draw();
			setTimeout( updateChartLive, 70 );
		}

		// Init live chart
		var $chartLive = jQuery.plot( $flotLive,
			[{
				data: getRandomData()
			}], {
				series: {
					shadowSize: 0
				},
				lines: {
					show: true,
					lineWidth: 1,
					fill: true,
					fillColor: {
						colors: [{
							opacity: .2
						}, {
							opacity: .2
						}]
					}
				},
				colors: ['#fff'],
				grid: {
					borderWidth: 0,
					color: App.colors.gray_lighter,
				},
				yaxis: {
					show: false,
					min: 0,
					max: 110
				},
				xaxis: {
					show: false
				}
			}
		);

		// Start getting new data
		updateChartLive();
	};

	return {
		init: function () {
			// Init ChartJS chart
			initDashChartJS();
		}
	};
}();

// Initialize when page loads
jQuery( function() {
	BasePagesDashboard.init();
});
