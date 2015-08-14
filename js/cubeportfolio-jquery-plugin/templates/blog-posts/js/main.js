(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-blog-posts').cubeportfolio({
        filters: '#js-filters-blog-posts',
        defaultFilter: '*',
        animationType: '3dflip',
        gapHorizontal: 70,
        gapVertical: 20,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'revealBottom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 400,
    });
})(jQuery, window, document);
