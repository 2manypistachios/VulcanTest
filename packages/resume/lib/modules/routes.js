import { addRoute, Components } from 'meteor/vulcan:core';

addRoute({ name: 'movies', path: '/', componentName: 'ResumeList' });
addRoute({ name: 'myReactions', path: '/my-reactions', componentName: 'MyReactions' });
addRoute({ name: 'myReactions2', path: '/my-reactions2', componentName: 'MyReactions2' });
addRoute({ name: 'resume', path: '/resume', componentName: 'ResumeList'})
addRoute({ name: 'canvasPop', path: '/animation1', componentName: 'CanvasPop'})