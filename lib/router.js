Router.configure({ layoutTemplate: 'layout' });

Router.route('/', function () {
    this.render('main');
});

Router.route('project/:id', function () {
    project_info = ProjectsCollection.findOne({ id: this.params.id });
    this.render('project', {
        data: function () {
            return project_info;
        }
    });
});

// Router.route('project/:id',function(){
//     // project_info = ProjectsCollection.findOne({id:this.params.id});
//     this.render('project');
// });
