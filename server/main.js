import { Meteor } from 'meteor/meteor';
// import {WebApp} from 'meteor/webapp';

import '../imports/api/users';
import '../imports/startup/simpl-schema-configuration.js';

Meteor.startup(() => {
    // WebApp
    //     .connectHandlers
    //     .use((req,res,next) => {
    //         you can redirect from here if you want
    //     })
});

