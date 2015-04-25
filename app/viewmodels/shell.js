﻿define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: 'timeline',  moduleId: 'viewmodels/timeline', nav: true },
                { route: '',title:'Home', moduleId: 'viewmodels/home', nav: true },
                //{ route: 'friend_suggestion', moduleId: 'viewmodels/friendsuggestion', nav: true },
                { route: 'sideBar_left_home', moduleId: 'viewmodels/sideBar_left_home', nav: true },
                //{ route: 'group_suggestion', moduleId: 'viewmodels/group_suggestion', nav: true },
                { route: 'feed', moduleId: 'viewmodels/feed', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});


