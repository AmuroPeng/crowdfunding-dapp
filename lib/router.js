Router.configure({ layoutTemplate: 'layout' });

Router.route('/', function () {
    this.render('main');
});

Router.route('project/detail/:id', function () {
    project_info = ProjectsCollection.findOne({ id: this.params.id });
    this.render('project', {
        data: function () {
            return project_info;
        }
    });
});

Router.route('/user', function () {
    this.render('user');
});

Router.route('/console', function () {
    this.render('console');
});

Router.route('/project/start', function () {
    this.render('create_project');
});

Router.route('/user/edit', function () {
    this.render('user_edit');
});

// Router.route('project/:id',function(){
//     // project_info = ProjectsCollection.findOne({id:this.params.id});
//     this.render('project');
// });
