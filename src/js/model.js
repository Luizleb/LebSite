const model = (function(){
    var data = projectsData.getProjectsData();
    
    function getProjectNames() {
        let result = [];
        data.forEach(function(project){
            result.push(project.name);
        });
        return result;
    };

    function getProjectInfo(id){
        let index;
        index = data.findIndex(function(project){
            return project["id"] === id;
        });
        return data[index];
    };

    return {getProjectNames: getProjectNames,
            getProjectInfo: getProjectInfo};
})();